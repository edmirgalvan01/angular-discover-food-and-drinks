import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsByCategoryService {
  private API_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getMealsByCategory(category: string) {
    return this.http.get(`${this.API_URL}/filter.php?c=${category}`).pipe(
      map((resp: any) => {
        var meals = resp;
        return meals;
      })
    );
  }
}
