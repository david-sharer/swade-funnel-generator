import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chance from 'chance';

@Component({
  selector: 'app-fifty-fathoms',
  templateUrl: './fifty-fathoms.component.html',
  styleUrls: ['./fifty-fathoms.component.scss']
})
export class FiftyFathomsComponent implements OnInit {
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
      this.title.setTitle(`SWADEgen| 4char| 50f| ${this.seed}`);
    });
  }
}
