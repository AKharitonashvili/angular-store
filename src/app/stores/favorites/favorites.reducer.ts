import { createReducer, on } from '@ngrx/store';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';
import * as FavoritesActions from './favorites.actions';

export interface FavoritesState {
  loading: boolean;
  error?: string;
  favorites: SelectedProductInterface[];
}

export const initialState: FavoritesState = {
  loading: false,
  favorites: [],
};

export const favoritesReducer = createReducer(
  initialState,
  on(
    FavoritesActions.loadFavorites,
    (state): FavoritesState => ({ ...state, loading: true })
  ),
  on(
    FavoritesActions.loadFavoritesSuccess,
    (state, { favorites }): FavoritesState => ({
      ...state,
      loading: false,
      favorites,
    })
  ),
  on(
    FavoritesActions.loadFavoritesFailure,
    (state, { error }): FavoritesState => ({ ...state, loading: false, error })
  ),
  on(FavoritesActions.addToFavorites, (state, { product }): FavoritesState => {
    if (state.favorites.find(f => f.id === product.id)) {
      return state;
    }
    return {
      ...state,
      favorites: [...state.favorites, product],
    };
  }),
  on(
    FavoritesActions.removeFromFavorites,
    (state, { id }): FavoritesState => ({
      ...state,
      favorites: state.favorites?.filter(f => f.id !== id),
    })
  )
);
