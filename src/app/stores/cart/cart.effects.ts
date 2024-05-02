import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as CartActions from './cart.actions';
import * as ApplicationActions from '../initial.actions';
import { CookiesService } from '../../services/cookies.service';
import * as CartSelectors from './cart.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.loadCart, ApplicationActions.loadApplication),
      switchMap(() =>
        of(this.cookieService.getCookie('cart') ?? []).pipe(
          map(cart => CartActions.loadCartSuccess({ cart })),
          catchError(error => of(CartActions.loadCartFailure({ error })))
        )
      )
    );
  });

  listenToCartUpdates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addToCart, CartActions.removeFromCart),
      switchMap(() =>
        this.store.select(CartSelectors.selectCart).pipe(
          map(cart => {
            this.cookieService.setCookie('cart', cart);
            return CartActions.updateCartSuccess();
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private cookieService: CookiesService,
    private store: Store
  ) {}
}
