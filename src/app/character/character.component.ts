import { Component, OnInit } from '@angular/core';
import { HindranceProviderService } from '../provider/hindrance-provider.service';
import { ProfessionProviderService } from '../provider/profession-provider.service';
import { EdgeProviderService } from '../provider/edge-provider.service';
import { Profession } from '../provider/profession';
import { Hindrance } from '../provider/hindrance';
import { Edge } from '../provider/edge';
import * as _ from 'lodash';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public edge: Edge;
  public hindrance: Hindrance;
  public profession: Profession;

  constructor(
    public edges: EdgeProviderService,
    public hindrances: HindranceProviderService,
    public professions: ProfessionProviderService,
  ) { }

  public ngOnInit(): void {
    this.edge = _.sample(this.edges.edges);
    this.hindrance = _.sample(this.hindrances.hindrances);
    this.profession = _.sample(this.professions.professions);
  }
}
