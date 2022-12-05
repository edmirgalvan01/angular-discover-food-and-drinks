import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private API_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getMealByName(name: string) {
    return this.http.get(`${this.API_URL}/search.php?s=${name}`).pipe(
      map((resp: any) => {
        var meal = resp;
        return meal;
      })
    );
  }
}
