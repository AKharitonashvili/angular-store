import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { ProductInterface } from '../../../shared/interfaces/interfaces';
import * as ProductsSelectors from '../../../stores/home/products/products.selectors';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as HomeActions from '../../../stores/home/home.actions';
import { ObjectToArrayPipe } from '../../../shared/pipes/object-to-array/object-to-array.pipe';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteIconComponent } from '../../../shared/ui/buttons/favorite-icon/favorite-icon.component';
import { IsFavoritePipe } from '../../../shared/pipes/is-favorite/isFavorite.pipe';
import * as FavoritesSelectors from '../../../stores/favorites/favorites.selectors';
import * as FavoritesActions from '../../../stores/favorites/favorites.actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ObjectToArrayPipe,
    MatIconModule,
    FavoriteIconComponent,
    IsFavoritePipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  vm$: Observable<{
    product: ProductInterface | undefined;
    isFavorite: boolean;
  }> = combineLatest([
    this.store
      .select(ProductsSelectors.selectProducts)
      .pipe(
        map(products =>
          products?.find(
            product => product.id === this.route.snapshot.paramMap.get('id')
          )
        )
      ),
    this.store.select(
      FavoritesSelectors.selectIsSelectedAsFavorite(
        this.route.snapshot.paramMap.get('id') ?? ''
      )
    ),
  ]).pipe(
    map(([product, isFavorite]) => ({
      product,
      isFavorite,
    }))
  );

  selectedOption = signal<number>(0);

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.store.dispatch(HomeActions.loadProductsPage());
  }

  changeSelectedOption(option: number) {
    this.selectedOption.set(option);
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
