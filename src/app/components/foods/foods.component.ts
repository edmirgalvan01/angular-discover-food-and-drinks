import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/models/CategoryType';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  categories: CategoryType[] = [];

  constructor(private service: FoodsService) {}

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((res) => {
      this.categories = res.categories;
    });
  }
}
