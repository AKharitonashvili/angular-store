import { createAction, props } from '@ngrx/store';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';

export const loadCart = createAction('[Cart] Load');

export const loadCartSuccess = createAction(
  '[Cart] Load Success',
  props<{ cart: SelectedProductInterface[] }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Failure',
  props<{ error: string }>()
);

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: SelectedProductInterface }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ id: string }>()
);

export const updateCartSuccess = createAction('[Cart] Update');

export const incrementQuantity = createAction(
  '[Cart] Increase Quantity',
  props<{ id: string }>()
);
export const decrementQuantity = createAction(
  '[Cart] Decrement Quantity',
  props<{ id: string }>()
);
export const setQuantity = createAction(
  '[Cart] Decrement Quantity',
  props<{ id: string; quantity: number }>()
);
