import {Routes} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './login/login.component';



export const appRoutes : Routes = [
 { path: 'products/:urlpdt', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'login', component: LoginComponent}
//  { path: '', redirectTo: '/categories',pathMatch: 'full'}
];
