import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

// custom interceptor
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';



import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:XhrInterceptor,
      multi:true
   },
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
