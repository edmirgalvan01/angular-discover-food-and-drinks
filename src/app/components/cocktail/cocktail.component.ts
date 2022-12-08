import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkResponse } from 'src/app/models/DrinkResponse';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  drink: DrinkResponse = {
    idDrink: '',
    strAlcoholic: '',
    strCategory: '',
    strCreativeCommonsConfirmed: '',
    strDrink: '',
    strDrinkThumb: '',
    strGlass: '',
    strInstructions: '',
  };

  drinkName: string =
    this.currentPath.snapshot.paramMap.get('cocktailName') || '';

  constructor(
    private service: CocktailService,
    private currentPath: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getDrinkByName(this.drinkName).subscribe((res) => {
      console.log(res);
      this.drink = res;
    });
  }
}
