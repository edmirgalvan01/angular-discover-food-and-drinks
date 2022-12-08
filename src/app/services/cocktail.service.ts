import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getDrinkByName(name: string) {
    return this.http.get(`${this.API_URL}/search.php?s=${name}`).pipe(
      map((resp: any) => {
        var drink = resp.drinks[0];
        return drink;
      })
    );
  }
}
