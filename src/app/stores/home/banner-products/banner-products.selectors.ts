import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannerProductsState } from './banner-products.reducer';
import { StoreFeatureKeys } from '../../feature.keys';

export const selectBannerProductsFeature =
  createFeatureSelector<BannerProductsState>(StoreFeatureKeys.BANNER_PRODUCTS);

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
