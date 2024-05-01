import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as CartActions from './cart.actions';
import * as ApplicationActions from '../initial.actions';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.loadCart, ApplicationActions.loadApplication),
      switchMap(() =>
        of([]).pipe(
          map(cart => CartActions.loadCartSuccess({ cart })),
          catchError(error => of(CartActions.loadCartFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
