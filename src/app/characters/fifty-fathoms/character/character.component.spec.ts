import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFathomsCharactersComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: FiftyFathomsCharactersComponent;
  let fixture: ComponentFixture<FiftyFathomsCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyFathomsCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyFathomsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
