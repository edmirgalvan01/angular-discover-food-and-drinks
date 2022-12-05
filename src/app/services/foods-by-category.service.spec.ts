import { TestBed } from '@angular/core/testing';

import { FoodsByCategoryService } from './foods-by-category.service';

describe('FoodsByCategoryService', () => {
  let service: FoodsByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
