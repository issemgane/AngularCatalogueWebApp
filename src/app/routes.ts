import {Routes} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';



export const appRoutes : Routes = [
 { path: 'products/:urlpdt', component: ProduitsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'adminCategories', component: AdminCategoriesComponent},
  { path: 'adminProducts', component: AdminProductsComponent},
  { path: 'adminUsers', component: AdminUsersComponent},
//  { path: '', redirectTo: '/categories',pathMatch: 'full'}
];
