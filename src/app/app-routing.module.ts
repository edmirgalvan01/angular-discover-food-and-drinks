import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
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
  { path: 'cocteles', component: CocktailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
