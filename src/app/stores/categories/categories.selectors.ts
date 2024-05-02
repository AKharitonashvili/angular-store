import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from './categories.reducer';
import { StoreFeatureKeys } from '../feature.keys';

export const selectCategoriesFeature = createFeatureSelector<CategoriesState>(
  StoreFeatureKeys.CATEGORIES
);

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
