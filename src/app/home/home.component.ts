import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BigBannerComponent } from './big-banner/big-banner.component';
import { BrowseByCategoryComponent } from './browse-by-category/browse-by-category.component';
import { HomepageProductsComponent } from './homepage-products/homepage-products.component';

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
export class HomeComponent {}
