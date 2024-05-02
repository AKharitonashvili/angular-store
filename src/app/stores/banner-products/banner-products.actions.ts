import { createAction, props } from '@ngrx/store';
import { BigBannerProductsInterface } from '../../shared/interfaces/interfaces';

export const loadBannerProducts = createAction('[Banner Products] Load');

export const loadBannerProductsSuccess = createAction(
  '[Banner Products] Load Success',
  props<{ BannerProducts: BigBannerProductsInterface[] }>()
);

export const loadBannerProductsFailure = createAction(
  '[Banner Products] Load Failure',
  props<{ error: string }>()
);
