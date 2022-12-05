import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealType } from 'src/app/models/MealType';
import { FoodsByCategoryService } from 'src/app/services/foods-by-category.service';

@Component({
  selector: 'app-foods-by-category',
  templateUrl: './foods-by-category.component.html',
  styleUrls: ['./foods-by-category.component.css'],
})
export class FoodsByCategoryComponent implements OnInit {
  meals: MealType[] = [];
  categoryName: string =
    this.currentPath.snapshot.paramMap.get('categoryName') || '';

  constructor(
    private currentPath: ActivatedRoute,
    private service: FoodsByCategoryService
  ) {}

  ngOnInit(): void {
    this.service.getMealsByCategory(this.categoryName).subscribe((res) => {
      this.meals = res.meals;
    });
  }
}
