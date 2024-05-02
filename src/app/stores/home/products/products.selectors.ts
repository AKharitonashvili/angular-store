import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { StoreFeatureKeys } from '../../feature.keys';

export const selectProductsFeature = createFeatureSelector<ProductsState>(
  StoreFeatureKeys.PRODUCTS
);

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.loading
);
export const selectProductsError = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.error
);
