import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../shared/ui/search-input/search-input.component';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import * as FavoritesSelectors from '../../stores/favorites/favorites.selectors';
import { Observable } from 'rxjs';

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
  favoriteItemsCount$: Observable<number> = this.store.select(
    FavoritesSelectors.selectFavoriteItemsCount
  );

  constructor(
    public router: Router,
    private store: Store
  ) {}

  toggleShowMenu() {
    this.showMenu.set(!this.showMenu());
  }
}
