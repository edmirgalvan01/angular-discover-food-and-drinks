import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodsComponent } from './components/foods/foods.component';
import { HomeComponent } from './components/home/home.component';
import { FoodsByCategoryComponent } from './components/foods-by-category/foods-by-category.component';
import { MealComponent } from './components/meal/meal.component';
import { CocktailsCategoriesComponent } from './components/cocktails-categories/cocktails-categories.component';
import { CocktailsCategoryComponent } from './components/cocktails-category/cocktails-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodsComponent,
    HomeComponent,
    FoodsByCategoryComponent,
    MealComponent,
    CocktailsCategoriesComponent,
    CocktailsCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
