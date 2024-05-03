import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as FavoritesActions from './favorites.actions';
import * as FavoritesSelectors from './favorites.selectors';
import * as ApplicationActions from '../page.actions';
import { Store } from '@ngrx/store';
import { CookiesService } from '../../services/cookies.service';

@Injectable()
export class FavoritesEffects {
  loadFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        FavoritesActions.loadFavorites,
        ApplicationActions.loadApplication
      ),
      switchMap(() =>
        of(this.cookieService.getCookie('favorites') ?? []).pipe(
          map(favorites =>
            FavoritesActions.loadFavoritesSuccess({ favorites })
          ),
          catchError(error =>
            of(FavoritesActions.loadFavoritesFailure({ error }))
          )
        )
      )
    );
  });

  listenToFavoritesUpdates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        FavoritesActions.addToFavorites,
        FavoritesActions.removeFromFavorites
      ),
      switchMap(() =>
        this.store.select(FavoritesSelectors.selectFavorites).pipe(
          map(favorites => {
            this.cookieService.setCookie('favorites', favorites);
            return FavoritesActions.updateFavoritesSuccess();
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
