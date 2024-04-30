import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Products } from '../../../fake-api/fake-api';
import * as ProductsActions from './products.actions';
import * as HomeActions from '../home.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ProductsActions.loadProducts,
        HomeActions.loadHomePage,
        HomeActions.loadProductsPage
      ),
      switchMap(() =>
        of(Products).pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
