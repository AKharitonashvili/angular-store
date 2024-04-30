import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MinimizeTextPipe } from '../../../shared/pipes/minimize-text/minimize-text.pipe';
import {
  ProductInterface,
  ProductType,
} from '../../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap, tap } from 'rxjs';
import * as ProductsSelectors from '../../../stores/home/products/products.selectors';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MinimizeTextPipe],
  templateUrl: './homepage-products.component.html',
  styleUrl: './homepage-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageProductsComponent {
  filter = signal<ProductType>('newArrival');
  products$: Observable<ProductInterface[] | undefined> = toObservable(
    this.filter
  ).pipe(
    switchMap(() => this.store.select(ProductsSelectors.selectProducts)),
    map(products => products?.filter(p => p.type?.includes(this.filter())))
  );

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
}
