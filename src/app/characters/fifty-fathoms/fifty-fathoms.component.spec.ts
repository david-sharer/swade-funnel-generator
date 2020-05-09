import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFathomsComponent } from './fifty-fathoms.component';

describe('FiftyFathomsComponent', () => {
  let component: FiftyFathomsComponent;
  let fixture: ComponentFixture<FiftyFathomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyFathomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyFathomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
