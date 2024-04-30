import { createAction, props } from '@ngrx/store';
import { ProductInterface } from '../../../shared/interfaces/interfaces';

export const loadProducts = createAction('[Products] Load');

export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: ProductInterface[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Failure',
  props<{ error: string }>()
);
