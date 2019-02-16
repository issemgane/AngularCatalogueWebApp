import {Routes} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';


export const appRoutes : Routes = [
 { path: 'produits', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent}
//  { path: '', redirectTo: '/categories',pathMatch: 'full'}
];
