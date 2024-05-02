import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartAndFavoritesComponent } from '../../shared/ui/wrappers/cart-and-favorites/cart-and-favorites.component';
import { Observable, combineLatest, map } from 'rxjs';
import { SelectedProductInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import * as CartSelectors from '../../stores/cart/cart.selectors';
import * as CartActions from '../../stores/cart/cart.actions';
import { AsyncPipe } from '@angular/common';
import { CartCardComponent } from '../../shared/ui/cards/cart-card/cart-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartAndFavoritesComponent,
    AsyncPipe,
    CartCardComponent,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  vm$: Observable<{ cart: SelectedProductInterface[] | undefined }> =
    combineLatest([this.store.select(CartSelectors.selectCart)]).pipe(
      map(([cart]) => ({ cart }))
    );

  constructor(private store: Store) {}

  removeFromFavorites(item: SelectedProductInterface) {
    this.store.dispatch(
      CartActions.removeFromCart({
        id: item.id,
      })
    );
  }
}
