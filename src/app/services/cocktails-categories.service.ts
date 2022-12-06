import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsCategoriesService {
  private API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.API_URL}/list.php?c=list`).pipe(
      map((resp: any) => {
        var categories = resp.drinks;
        return categories;
      })
    );
  }
}
