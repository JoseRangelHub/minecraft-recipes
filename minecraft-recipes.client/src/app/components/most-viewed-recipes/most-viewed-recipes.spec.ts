import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedRecipes } from './most-viewed-recipes';

describe('MostViewedRecipes', () => {
  let component: MostViewedRecipes;
  let fixture: ComponentFixture<MostViewedRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostViewedRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostViewedRecipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
