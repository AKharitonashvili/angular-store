import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from './categories.reducer';

export const selectCategoriesFeature =
  createFeatureSelector<CategoriesState>('categories');

export const selectCategories = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.categories
);

export const selectCategoriesLoading = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.loading
);
export const selectCategoriesError = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.error
);
