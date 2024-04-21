import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { BrowseByCategoryComponent } from './browse-by-category/browse-by-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FeaturedProductsComponent,
    BrowseByCategoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
