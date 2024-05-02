import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/pages/home/home.component').then(
        m => m.HomeComponent
      ),
  },
  {
    path: 'products/categories/:category',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        m => m.ProductsComponent
      ),
  },
  {
    path: 'products/items/:id',
    loadComponent: () =>
      import('./pages/home/pages/product/product.component').then(
        m => m.ProductComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        m => m.FavoritesComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then(m => m.CartComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
