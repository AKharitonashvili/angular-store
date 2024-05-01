import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';
import * as FavoritesSelector from '../../stores/favorites/favorites.selectors';
import * as FavoritesActions from '../../stores/favorites/favorites.actions';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CartAndFavoritesComponent } from '../../shared/ui/wrappers/cart-and-favorites/cart-and-favorites.component';
import { CartCardComponent } from '../../shared/ui/cards/cart-card/cart-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIconModule,
    CartAndFavoritesComponent,
    CartCardComponent,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  vm$: Observable<{
    favorites: SelectedProductInterface[] | undefined;
  }> = combineLatest([
    this.store.select(FavoritesSelector.selectFavorites),
  ]).pipe(map(([favorites]) => ({ favorites })));

  constructor(private store: Store) {}

  removeFromFavorites(product: SelectedProductInterface) {
    this.store.dispatch(
      FavoritesActions.removeFromFavorites({
        id: product.id,
      })
    );
  }
}
