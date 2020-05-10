import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandoComponent } from './expando.component';

describe('ExpandoComponent', () => {
  let component: ExpandoComponent;
  let fixture: ComponentFixture<ExpandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
