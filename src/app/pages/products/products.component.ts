import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Observable, combineLatest, map, tap } from 'rxjs';
import {
  CategoryInterface,
  ProductInterface,
  SelectedProductInterface,
} from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import * as ProductsSelectors from '../../stores/products/products.selectors';
import * as FavoritesSelectors from '../../stores/favorites/favorites.selectors';
import * as CategoriesSelectors from '../../stores/categories/categories.selectors';
import { AsyncPipe } from '@angular/common';
import * as PageActions from '../../stores/page.actions';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundComponent } from '../../shared/ui/error/not-found/not-found.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, NotFoundComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  vm$: Observable<{
    products: ProductInterface[] | undefined;
    favorites: SelectedProductInterface[];
    categories: CategoryInterface[] | undefined;
  }> = combineLatest([
    this.store.select(ProductsSelectors.selectProducts),
    this.store.select(FavoritesSelectors.selectFavorites),
    this.store.select(CategoriesSelectors.selectCategories),
  ]).pipe(
    map(([products, favorites, categories]) => {
      this.currentCategory.set(
        categories?.find(
          c => c.categoryName === this.route.snapshot.paramMap.get('category')
        )
      );

      return {
        products: products?.filter(p =>
          p.categories.includes(this.currentCategory()?.name ?? '')
        ),
        favorites,
        categories,
      };
    })
  );

  currentCategory = signal<CategoryInterface | undefined>(undefined);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.store.dispatch(PageActions.loadProductsPage());
  }

  navigate(id: string) {
    this.router.navigateByUrl(`products/items/${id}`);
  }
}
