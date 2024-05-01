import { createAction, props } from '@ngrx/store';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';

export const loadFavorites = createAction('[Favorites] Load');

export const loadFavoritesSuccess = createAction(
  '[Favorites] Load Success',
  props<{ favorites: SelectedProductInterface[] }>()
);

export const loadFavoritesFailure = createAction(
  '[Favorites] Load Failure',
  props<{ error: string }>()
);

export const addToFavorites = createAction(
  '[Favorites] Add To Favorites',
  props<{ product: SelectedProductInterface }>()
);

export const removeFromFavorites = createAction(
  '[Favorites] Remove From Favorites',
  props<{ id: string }>()
);
