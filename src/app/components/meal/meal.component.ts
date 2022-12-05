import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullMealType } from 'src/app/models/FullMealType';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  meal: FullMealType = {
    idMeal: '',
    strArea: '',
    strCategory: '',
    strInstructions: '',
    strMeal: '',
    strMealThumb: '',
    strSource: '',
    strTags: '',
    strYoutube: '',
  };
  mealName: string = this.currentPath.snapshot.paramMap.get('meal') || '';

  constructor(
    private service: MealService,
    private currentPath: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getMealByName(this.mealName).subscribe((res) => {
      this.meal = res.meals[0];
    });
  }
}
