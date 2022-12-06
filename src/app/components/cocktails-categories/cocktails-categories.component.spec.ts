import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsCategoriesComponent } from './cocktails-categories.component';

describe('CocktailsCategoriesComponent', () => {
  let component: CocktailsCategoriesComponent;
  let fixture: ComponentFixture<CocktailsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
