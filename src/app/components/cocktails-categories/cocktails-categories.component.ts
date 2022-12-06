import { Component, OnInit } from '@angular/core';
import { CocktailsCategoriesService } from 'src/app/services/cocktails-categories.service';

@Component({
  selector: 'app-cocktails-categories',
  templateUrl: './cocktails-categories.component.html',
  styleUrls: ['./cocktails-categories.component.css'],
})
export class CocktailsCategoriesComponent implements OnInit {
  categories: Array<{ strCategory: string }> = [];

  constructor(private service: CocktailsCategoriesService) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
