import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsCategoryService {
  private API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCocktailsByCategory(category: string) {
    return this.http.get(`${this.API_URL}/filter.php?c=${category}`).pipe(
      map((resp: any) => {
        var drinks = resp;
        return drinks;
      })
    );
  }
}
