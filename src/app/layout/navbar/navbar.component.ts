import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../shared/ui/search-input/search-input.component';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import * as FavoritesSelectors from '../../stores/favorites/favorites.selectors';
import * as CartSelectors from '../../stores/cart/cart.selectors';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SearchInputComponent,
    RouterModule,
    MatBadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  showMenu = signal<boolean>(false);
  vm$: Observable<{ favoritesCount: number; cartItemsCount: number }> =
    combineLatest([
      this.store.select(FavoritesSelectors.selectFavoriteItemsCount),
      this.store.select(CartSelectors.selectFavoriteItemsCount),
    ]).pipe(
      map(([favoritesCount, cartItemsCount]) => ({
        favoritesCount,
        cartItemsCount,
      }))
    );

  constructor(
    public router: Router,
    private store: Store
  ) {}

  toggleShowMenu() {
    this.showMenu.set(!this.showMenu());
  }
}
