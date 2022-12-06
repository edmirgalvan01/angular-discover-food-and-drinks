import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsCategoryComponent } from './cocktails-category.component';

describe('CocktailsCategoryComponent', () => {
  let component: CocktailsCategoryComponent;
  let fixture: ComponentFixture<CocktailsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
