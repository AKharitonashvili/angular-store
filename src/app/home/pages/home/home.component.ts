import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { BigBannerComponent } from '../../components/big-banner/big-banner.component';
import { BrowseByCategoryComponent } from '../../components/browse-by-category/browse-by-category.component';
import { HomepageProductsComponent } from '../../components/homepage-products/homepage-products.component';
import { Store } from '@ngrx/store';
import * as HomeActions from '../../../stores/home/home.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BrowseByCategoryComponent,
    HomepageProductsComponent,
    BigBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private store: Store) {
    this.store.dispatch(HomeActions.loadHomePage());
  }
}
