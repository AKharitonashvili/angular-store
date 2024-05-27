import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { categoriesReducer } from './stores/categories/categories.reducer';
import { CategoriesEffects } from './stores/categories/categories.effects';
import { productsReducer } from './stores/products/products.reducer';
import { ProductsEffects } from './stores/products/products.effects';
import { bannerProductsReducer } from './stores/banner-products/banner-products.reducer';
import { BannerProductsEffects } from './stores/banner-products/banner-products.effects';
import { FavoritesEffects } from './stores/favorites/favorites.effects';
import { favoritesReducer } from './stores/favorites/favorites.reducer';
import { cartReducer } from './stores/cart/cart.reducer';
import { CartEffects } from './stores/cart/cart.effects';
import { StoreFeatureKeys } from './stores/feature.keys';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withHashLocation(),
      withViewTransitions()
    ),
    provideAnimationsAsync(),
    provideClientHydration(),
    provideEffects([
      CategoriesEffects,
      ProductsEffects,
      BannerProductsEffects,
      FavoritesEffects,
      CartEffects,
    ]),
    provideStore({ categories: categoriesReducer }),
    provideState({
      name: StoreFeatureKeys.CATEGORIES,
      reducer: categoriesReducer,
    }),
    provideState({ name: StoreFeatureKeys.PRODUCTS, reducer: productsReducer }),
    provideState({
      name: StoreFeatureKeys.BANNER_PRODUCTS,
      reducer: bannerProductsReducer,
    }),
    provideState({
      name: StoreFeatureKeys.FAVORITES,
      reducer: favoritesReducer,
    }),
    provideState({ name: StoreFeatureKeys.CART, reducer: cartReducer }),
  ],
};

//
