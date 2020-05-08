import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public seed: string;

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.seed = params.get('seed');
    });
  }
}
