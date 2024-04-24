import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BrowseByCategoryComponent } from './home/browse-by-category/browse-by-category.component';
import { HomepageProductsComponent } from './home/homepage-products/homepage-products.component';
import { BigBannerComponent } from './home/big-banner/big-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BrowseByCategoryComponent,
    HomepageProductsComponent,
    BigBannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
