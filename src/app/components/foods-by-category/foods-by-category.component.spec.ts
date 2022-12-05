import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsByCategoryComponent } from './foods-by-category.component';

describe('FoodsByCategoryComponent', () => {
  let component: FoodsByCategoryComponent;
  let fixture: ComponentFixture<FoodsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
