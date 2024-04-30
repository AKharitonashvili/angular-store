import { createAction, props } from '@ngrx/store';
import { CategoryInterface } from '../../../shared/interfaces/interfaces';

export const loadCategories = createAction('[Categories] Load');

export const loadCategoriesSuccess = createAction(
  '[Categories] Load Success',
  props<{ categories: CategoryInterface[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Categories] Load Failure',
  props<{ error: string }>()
);
