import { Component, OnChanges, Input } from '@angular/core';
import { MinimalEdge, Edge } from '@provider/edge';
import { Hindrance } from '@provider/hindrance';
import { ProfessionFull } from '@provider/profession-full';
import { EdgeProviderService } from '@provider/edge-provider.service';
import { HindranceProviderService } from '@provider/hindrance-provider.service';
import { ProfessionProviderService } from '@provider/profession-provider.service';
import { Chance, _ } from '@utility/common';
import { pickValidEdges } from '@utility/pick-valid-edges';
import { ProfessionFull2 } from '@provider/profession-full-2';

@Component({
  selector: 'app-fifty-fathoms-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class FiftyFathomsCharactersComponent implements OnChanges {
  public edges: Edge[];
  public hindrances: Hindrance[];
  public profession: ProfessionFull2;

  @Input() seed: string;

  constructor(
    public edgeProvider: EdgeProviderService,
    public hindranceProvider: HindranceProviderService,
    public professions: ProfessionProviderService,
  ) { }

  public ngOnChanges(): void {
    let points = 0;
    const chance = new Chance(this.seed);
    const hindrances = chance.shuffle(this.hindranceProvider.fiftyFathomsSwade);
    this.profession = _.first(chance.shuffle(this.professions.fiftyFathoms));

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
        this.edgeProvider.fiftyFathomsSwade,
        1);

    if (this.profession.race.afterCreation) {
      this.profession.race.afterCreation(chance, this.profession.race, this.edges, this.hindrances);
    }
  }
}
