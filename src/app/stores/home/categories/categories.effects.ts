import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Categories } from '../../../fake-api/fake-api';
import * as CategoryActions from './categories.actions';
import * as HomeActions from '../home.actions';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryActions.loadCategories, HomeActions.loadHomePage),
      switchMap(() =>
        of(Categories).pipe(
          map(categories =>
            CategoryActions.loadCategoriesSuccess({ categories })
          ),
          catchError(error =>
            of(CategoryActions.loadCategoriesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
