import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chance } from 'chance';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public seed: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.seed = params.get('seed');
      if (this.seed === '*') {
        this.router.navigate(['/characters', new Chance().guid()], { replaceUrl: true });
      }
    });
  }
}
