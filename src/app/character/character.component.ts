import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HindranceProviderService } from '../provider/hindrance-provider.service';
import { ProfessionProviderService } from '../provider/profession-provider.service';
import { EdgeProviderService } from '../provider/edge-provider.service';
import { Profession } from '../provider/profession';
import { Hindrance } from '../provider/hindrance';
import { MinimalEdge } from '../provider/edge';
import * as _ from 'lodash';
import { ProfessionFull } from '../provider/profession-full';
import { Chance } from 'chance';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {
  public edge: MinimalEdge;
  public hindrances: Hindrance[];
  public profession: ProfessionFull;

  @Input() seed: string;

  constructor(
    public edgeProvider: EdgeProviderService,
    public hindranceProvider: HindranceProviderService,
    public professions: ProfessionProviderService,
  ) { }

  public ngOnChanges(): void {
    let points = 0;
    const chance = new Chance(this.seed);
    const hindrances = chance.shuffle(this.hindranceProvider.swade);
    const edges = chance.shuffle(this.edgeProvider.oldEdges);
    this.profession = _.first(chance.shuffle(this.professions.swadeDccProfessions));

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

    const bannedEdges = _(this.hindrances).map(h => h.bannedEdges).flatten().uniq().value();
    this.edge = _(edges).dropWhile(v => bannedEdges.includes(v.name)).first();
  }
}
