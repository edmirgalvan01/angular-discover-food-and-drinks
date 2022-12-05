import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodsComponent } from './components/foods/foods.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { HomeComponent } from './components/home/home.component';
import { FoodsByCategoryComponent } from './components/foods-by-category/foods-by-category.component';
import { MealComponent } from './components/meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodsComponent,
    CocktailsComponent,
    HomeComponent,
    FoodsByCategoryComponent,
    MealComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
