import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'home/product/:id',
    loadComponent: () =>
      import('./home/pages/product/product.component').then(
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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
