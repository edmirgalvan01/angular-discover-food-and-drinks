import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CocktailsCategoriesComponent } from './components/cocktails-categories/cocktails-categories.component';
import { CocktailsCategoryComponent } from './components/cocktails-category/cocktails-category.component';
import { FoodsByCategoryComponent } from './components/foods-by-category/foods-by-category.component';
import { FoodsComponent } from './components/foods/foods.component';
import { HomeComponent } from './components/home/home.component';
import { MealComponent } from './components/meal/meal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comidas', component: FoodsComponent },
  {
    path: 'comidas/:categoryName',
    component: FoodsByCategoryComponent,
  },
  {
    path: 'comida/:meal',
    component: MealComponent,
  },
  { path: 'cocteles', component: CocktailsCategoriesComponent },
  {
    path: 'cocteles/:cocktailCategoryName',
    component: CocktailsCategoryComponent,
  },
  {
    path: 'coctel/:cocktailName',
    component: CocktailComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
