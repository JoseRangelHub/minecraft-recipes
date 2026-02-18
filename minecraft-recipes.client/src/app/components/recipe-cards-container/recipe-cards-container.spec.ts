import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardsContainer } from './recipe-cards-container';

describe('RecipeCardsContainer', () => {
  let component: RecipeCardsContainer;
  let fixture: ComponentFixture<RecipeCardsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCardsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
