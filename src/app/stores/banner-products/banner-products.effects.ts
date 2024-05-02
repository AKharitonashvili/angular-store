import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { bigBannerProducts } from '../../fake-api/fake-api';
import * as BannerProductsActions from './banner-products.actions';
import * as HomeActions from '../page.actions';

@Injectable()
export class BannerProductsEffects {
  loadBannerProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BannerProductsActions.loadBannerProducts,
        HomeActions.loadHomePage,
        HomeActions.loadProductsPage
      ),
      switchMap(() =>
        of(bigBannerProducts).pipe(
          map(BannerProducts =>
            BannerProductsActions.loadBannerProductsSuccess({ BannerProducts })
          ),
          catchError(error =>
            of(BannerProductsActions.loadBannerProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
