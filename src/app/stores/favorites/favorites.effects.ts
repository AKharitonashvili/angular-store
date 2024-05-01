import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as FavoritesActions from './favorites.actions';
import * as ApplicationActions from '../initial.actions';

@Injectable()
export class FavoritesEffects {
  loadFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        FavoritesActions.loadFavorites,
        ApplicationActions.loadApplication
      ),
      switchMap(() =>
        of([]).pipe(
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

  constructor(private actions$: Actions) {}
}
