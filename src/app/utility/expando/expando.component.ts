import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expando',
  templateUrl: './expando.component.html',
  styleUrls: ['./expando.component.scss']
})
export class ExpandoComponent implements OnInit {
  @Input() public label: string;
  @Input() public tooltip: string;
  @Input() public expand = false;

  constructor() { }

  ngOnInit(): void {
  }
}
