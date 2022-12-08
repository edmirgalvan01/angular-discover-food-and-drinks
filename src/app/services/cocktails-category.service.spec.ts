import { TestBed } from '@angular/core/testing';

import { CocktailsCategoryService } from './cocktails-category.service';

describe('CocktailsCategoryService', () => {
  let service: CocktailsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
