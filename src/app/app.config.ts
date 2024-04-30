import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { categoriesReducer } from './stores/home/categories/categories.reducer';
import { CategoriesEffects } from './stores/home/categories/categories.effects';
import { productsReducer } from './stores/home/products/products.reducer';
import { ProductsEffects } from './stores/home/products/products.effects';
import { bannerProductsReducer } from './stores/home/banner-products/banner-products.reducer';
import { BannerProductsEffects } from './stores/home/banner-products/banner-products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideClientHydration(),
    provideEffects([CategoriesEffects, ProductsEffects, BannerProductsEffects]),
    provideStore({ categories: categoriesReducer }),
    provideState({ name: 'categories', reducer: categoriesReducer }),
    provideState({ name: 'products', reducer: productsReducer }),
    provideState({ name: 'banner-products', reducer: bannerProductsReducer }),
  ],
};
