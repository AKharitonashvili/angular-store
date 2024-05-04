import { createReducer, on } from '@ngrx/store';
import { CategoryInterface } from '../../shared/interfaces/interfaces';
import * as CategoryActions from './categories.actions';

export interface CategoriesState {
  loading: boolean;
  error?: string;
  categories?: CategoryInterface[];
}

export const initialState: CategoriesState = {
  loading: false,
};

export const categoriesReducer = createReducer(
  initialState,
  on(
    CategoryActions.loadCategories,
    (state): CategoriesState => ({ ...state, loading: true })
  ),
  on(
    CategoryActions.loadCategoriesSuccess,
    (state, { categories }): CategoriesState => ({
      ...state,
      loading: false,
      categories,
    })
  ),
  on(
    CategoryActions.loadCategoriesFailure,
    (state, { error }): CategoriesState => ({ ...state, loading: false, error })
  )
);
