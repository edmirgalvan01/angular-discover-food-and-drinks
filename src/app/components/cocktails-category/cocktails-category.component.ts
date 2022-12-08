import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsCategoryService } from 'src/app/services/cocktails-category.service';

@Component({
  selector: 'app-cocktails-category',
  templateUrl: './cocktails-category.component.html',
  styleUrls: ['./cocktails-category.component.css'],
})
export class CocktailsCategoryComponent implements OnInit {
  drinks: Array<{ idDrink: string; strDrink: string; strDrinkThumb: string }> =
    [];
  categoryName: string =
    this.currentPath.snapshot.paramMap.get('cocktailCategoryName') || '';

  constructor(
    private currentPath: ActivatedRoute,
    private service: CocktailsCategoryService
  ) {}

  ngOnInit(): void {
    this.service.getCocktailsByCategory(this.categoryName).subscribe((res) => {
      this.drinks = res.drinks;
    });
  }
}
