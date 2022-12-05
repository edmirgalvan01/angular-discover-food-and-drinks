import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private API_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(`${this.API_URL}/categories.php`).pipe(
      map((resp: any) => {
        var categories = resp;
        return categories;
      })
    );
  }
}
