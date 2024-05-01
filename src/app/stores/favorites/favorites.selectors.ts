import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.reducer';

export const selectFavoritesFeature =
  createFeatureSelector<FavoritesState>('favorites');

export const selectFavorites = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.favorites
);

export const selectFavoriteItemsCount = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.favorites?.length ?? 0
);

export const selectIsSelectedAsFavorite = (id: string) =>
  createSelector(selectFavoritesFeature, (state: FavoritesState) =>
    state.favorites?.find(favorite => favorite.id === id)
  );

export const selectFavoritesLoading = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.loading
);

export const selectFavoritesError = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.error
);
