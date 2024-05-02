import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';
import { StoreFeatureKeys } from '../feature.keys';

export const selectCartFeature = createFeatureSelector<CartState>(
  StoreFeatureKeys.CART
);

export const selectCart = createSelector(
  selectCartFeature,
  (state: CartState) => state.cart
);

export const selectFavoriteItemsCount = createSelector(
  selectCartFeature,
  (state: CartState) => state.cart?.length ?? 0
);

export const selectIsInTheCart = (id: string) =>
  createSelector(
    selectCartFeature,
    (state: CartState) => !!state.cart?.find(favorite => favorite.id === id)
  );

export const selectCartLoading = createSelector(
  selectCartFeature,
  (state: CartState) => state.loading
);

export const selectCartError = createSelector(
  selectCartFeature,
  (state: CartState) => state.error
);
