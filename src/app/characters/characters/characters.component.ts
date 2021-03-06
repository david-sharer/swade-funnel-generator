import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chance } from 'chance';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public seed: string;

  constructor(
    private title: Title,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.seed = params.get('seed');
      if (this.seed === '*') {
        const newSeed = new Chance().guid();
        const newRoute = this.route.snapshot.routeConfig.path.replace(':seed', newSeed);
        this.router.navigate([newRoute], { replaceUrl: true });
      }
      this.title.setTitle(`SWADEgen| 4char| wm| ${this.seed}`);
    });
  }
}
