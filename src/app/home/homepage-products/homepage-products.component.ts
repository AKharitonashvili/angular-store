import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MinimizeTextPipe } from '../../shared/pipes/minimize-text/minimize-text.pipe';
import { Products } from '../../fake-api/fake-api';
import { ProductInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as ProductsSelectors from '../../stores/home/products/products.selectors';

@Component({
  selector: 'app-homepage-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MinimizeTextPipe],
  templateUrl: './homepage-products.component.html',
  styleUrl: './homepage-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageProductsComponent {
  products$: Observable<ProductInterface[] | undefined> = this.store.select(
    ProductsSelectors.selectProducts
  );
  constructor(private store: Store) {}
}
