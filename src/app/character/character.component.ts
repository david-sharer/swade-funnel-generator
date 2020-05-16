import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { Chance } from 'chance';
import { ProfessionFull2 } from '@provider/profession-full-2';
import { EdgeProviderService } from '@provider/edge-provider.service';
import { HindranceProviderService } from '@provider/hindrance-provider.service';
import { ProfessionProviderService } from '@provider/profession-provider.service';
import { PowerProviderService } from '@provider/power-provider.service';
import { Power } from '@provider/power';
import { Edge } from '@provider/edge';
import { Hindrance } from '@provider/hindrance';
import { pickValidEdges } from '@utility/pick-valid-edges';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {
  public edges: Edge[];
  public hindrances: Hindrance[];
  public profession: ProfessionFull2;
  public domain: string;
  public powers: Power[];

  @Input() seed: string;

  constructor(
    public edgeProvider: EdgeProviderService,
    public hindranceProvider: HindranceProviderService,
    public professions: ProfessionProviderService,
    public powerProvider: PowerProviderService,
  ) { }

  public ngOnChanges(): void {
    let points = 0;
    const chance = new Chance(this.seed);
    const hindrances = chance.shuffle(this.hindranceProvider.fiftyFathomsSwade);
    this.profession = _.first(chance.shuffle(this.professions.swadeFantasyProfessions));

    const sample =
      _(hindrances)
        .take(4)
        .orderBy(h => h.points, 'desc')
        .takeWhile(v => {
          points += v.points;
          return points <= 4;
        })
        .value();
    this.hindrances = sample;

    this.edges =
      pickValidEdges(
        chance,
        this.profession.race,
        [],
        this.hindrances,
        this.edgeProvider.westMarchesSwade,
        1);

    if (this.profession.race.afterCreation) {
      this.profession.race.afterCreation(chance, this.profession.race, this.edges, this.hindrances);
    }
    const allEdges = [...this.profession.race.edges, ...this.edges];
    this.domain = undefined;
    this.powers = undefined;
    if (allEdges.filter(e => e.summary.includes("<genmagic>")).length > 0) {
      this.domain = chance.pickone(["Force (Sound)", "Earth", "Fire", "Water", "Air", "Light (Holy)", "Dark (Necromantic)", "Insects"]);
      this.powers = chance.pickset(this.powerProvider.westMarchesNoviceAll, 3);
    }
  }
}
