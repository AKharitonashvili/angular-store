import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannerProductsState } from './banner-products.reducer';

export const selectBannerProductsFeature =
  createFeatureSelector<BannerProductsState>('banner-products');

export const selectBannerProducts = createSelector(
  selectBannerProductsFeature,
  (state: BannerProductsState) => state.BannerProducts
);

export const selectBannerProductsLoading = createSelector(
  selectBannerProductsFeature,
  (state: BannerProductsState) => state.loading
);
export const selectBannerProductsError = createSelector(
  selectBannerProductsFeature,
  (state: BannerProductsState) => state.error
);
