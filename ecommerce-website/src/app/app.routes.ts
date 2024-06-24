import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'catalog', component: ProductCatalogComponent },
  { path: 'cart', component: CartComponent },
];
