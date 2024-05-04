import { createReducer, on } from '@ngrx/store';
import {
  BigBannerProductsInterface,
  ProductInterface,
} from '../../shared/interfaces/interfaces';
import * as BannerProductsActions from './banner-products.actions';

export interface BannerProductsState {
  loading: boolean;
  error?: string;
  BannerProducts?: BigBannerProductsInterface[];
}

export const initialState: BannerProductsState = {
  loading: false,
};

export const bannerProductsReducer = createReducer(
  initialState,
  on(
    BannerProductsActions.loadBannerProducts,
    (state): BannerProductsState => ({ ...state, loading: true })
  ),
  on(
    BannerProductsActions.loadBannerProductsSuccess,
    (state, { BannerProducts }): BannerProductsState => ({
      ...state,
      loading: false,
      BannerProducts,
    })
  ),
  on(
    BannerProductsActions.loadBannerProductsFailure,
    (state, { error }): BannerProductsState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
