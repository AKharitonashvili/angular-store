import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ProductInterface } from '../../../shared/interfaces/interfaces';
import * as ProductsSelectors from '../../../stores/home/products/products.selectors';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as HomeActions from '../../../stores/home/home.actions';
import { ObjectToArrayPipe } from '../../../shared/pipes/object-to-array/object-to-array.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ObjectToArrayPipe, MatIconModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  product$: Observable<ProductInterface | undefined> = this.store
    .select(ProductsSelectors.selectProducts)
    .pipe(
      map(products =>
        products?.find(
          product => product.id === this.route.snapshot.paramMap.get('id')
        )
      )
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
}
