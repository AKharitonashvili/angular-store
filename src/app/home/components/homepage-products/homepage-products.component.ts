import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MinimizeTextPipe } from '../../../shared/pipes/minimize-text/minimize-text.pipe';
import {
  ProductInterface,
  ProductType,
  SelectedProductInterface,
} from '../../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, switchMap, tap } from 'rxjs';
import * as ProductsSelectors from '../../../stores/home/products/products.selectors';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import * as FavoritesSelector from '../../../stores/favorites/favorites.selectors';
import * as FavoritesActions from '../../../stores/favorites/favorites.actions';
import { IsFavoritePipe } from '../../../shared/pipes/is-favorite/isFavorite.pipe';
import { FavoriteIconComponent } from '../../../shared/ui/buttons/favorite-icon/favorite-icon.component';

@Component({
  selector: 'app-homepage-products',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MinimizeTextPipe,
    IsFavoritePipe,
    FavoriteIconComponent,
  ],
  templateUrl: './homepage-products.component.html',
  styleUrl: './homepage-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageProductsComponent {
  filter = signal<ProductType>('newArrival');
  vm$: Observable<{
    products: ProductInterface[] | undefined;
    favorites: SelectedProductInterface[] | undefined;
  }> = combineLatest([
    toObservable(this.filter).pipe(
      switchMap(() => this.store.select(ProductsSelectors.selectProducts)),
      map(products => products?.filter(p => p.type?.includes(this.filter())))
    ),
    this.store.select(FavoritesSelector.selectFavorites),
  ]).pipe(map(([products, favorites]) => ({ products, favorites })));

  constructor(
    private store: Store,
    private router: Router
  ) {}

  filterByType(type: ProductType) {
    this.filter.set(type);
  }

  navigateTo(id: string) {
    this.router.navigateByUrl(`home/product/${id}`);
  }

  toggleFavorite(isFavorite: boolean, product: ProductInterface) {
    if (isFavorite) {
      this.store.dispatch(
        FavoritesActions.removeFromFavorites({
          id: product.id,
        })
      );
    } else {
      this.store.dispatch(
        FavoritesActions.addToFavorites({
          product: { ...product, selectedOption: product.options?.[0] },
        })
      );
    }
  }
}
