import { TestBed } from '@angular/core/testing';

import { CocktailsCategoriesService } from './cocktails-categories.service';

describe('CocktailsCategoriesService', () => {
  let service: CocktailsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
