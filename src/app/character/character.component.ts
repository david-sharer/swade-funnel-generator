import { Component, OnInit, Input } from '@angular/core';
import { HindranceProviderService } from '../provider/hindrance-provider.service';
import { ProfessionProviderService } from '../provider/profession-provider.service';
import { EdgeProviderService } from '../provider/edge-provider.service';
import { Profession } from '../provider/profession';
import { Hindrance } from '../provider/hindrance';
import { Edge } from '../provider/edge';
import * as _ from 'lodash';
import * as seedrandom from 'seedrandom';
import { shuffleInPlace } from '../utility/shuffle';
import { ProfessionFull } from '../provider/profession-full';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public edge: Edge;
  public hindrances: Hindrance[];
  public profession: ProfessionFull;

  @Input() seed: string;

  constructor(
    public edgeProvider: EdgeProviderService,
    public hindranceProvider: HindranceProviderService,
    public professions: ProfessionProviderService,
  ) { }

  public ngOnInit(): void {
    let points = 0;
    const prng = seedrandom(this.seed);
    const hindrances = shuffleInPlace(this.hindranceProvider.hindrances, prng);
    const edges = shuffleInPlace(this.edgeProvider.edges, prng);
    this.profession = _.first(shuffleInPlace(this.professions.swadeDccProfessions, prng));

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
