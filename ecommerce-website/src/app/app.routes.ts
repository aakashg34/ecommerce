import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'catalog', component: ProductCatalogComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' } // Redirect any undefined routes to login   canActivate: [AuthGuard]
];


// const routes: Routes = [
//   { path: '', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
//   { path: 'catalog', loadChildren: () => import('./product-catalog/product-catalog.component').then(m => m.ProductCatalogComponent) },
//   { path: 'cart', loadChildren: () => import('./cart/cart.component').then(m => m.CartComponent) },
//   { path: '**', redirectTo: '' } // Redirect any undefined routes to login
// ];
