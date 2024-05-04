import { createReducer, on } from '@ngrx/store';
import { ProductInterface } from '../../shared/interfaces/interfaces';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  loading: boolean;
  error?: string;
  products?: ProductInterface[];
}

const initialState: ProductsState = {
  loading: false,
};

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsActions.loadProducts,
    (state): ProductsState => ({ ...state, loading: true })
  ),
  on(
    ProductsActions.loadProductsSuccess,
    (state, { products }): ProductsState => ({
      ...state,
      loading: false,
      products,
    })
  ),
  on(
    ProductsActions.loadProductsFailure,
    (state, { error }): ProductsState => ({ ...state, loading: false, error })
  )
);
