import { createReducer, on } from '@ngrx/store';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';
import * as CartActions from './cart.actions';

export interface CartState {
  loading: boolean;
  error?: string;
  cart: SelectedProductInterface[];
}

export const initialState: CartState = {
  loading: false,
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, (state): CartState => ({ ...state, loading: true })),
  on(
    CartActions.loadCartSuccess,
    (state, { cart }): CartState => ({
      ...state,
      loading: true,
      cart,
    })
  ),
  on(
    CartActions.loadCartFailure,
    (state, { error }): CartState => ({ ...state, loading: false, error })
  ),
  on(CartActions.addToCart, (state, { product }): CartState => {
    if (state.cart.find(f => f.id === product.id)) {
      return state;
    }
    return {
      ...state,
      cart: [...state.cart, product],
    };
  }),
  on(
    CartActions.removeFromCart,
    (state, { id }): CartState => ({
      ...state,
      cart: state.cart?.filter(f => f.id !== id),
    })
  )
);
