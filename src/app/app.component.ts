import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './layout/navbar/navbar.component'
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component'
import { BrowseByCategoryComponent } from './home/browse-by-category/browse-by-category.component'
import { HomepageProductsComponent } from './home/homepage-products/homepage-products.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FeaturedProductsComponent,
    BrowseByCategoryComponent,
    HomepageProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
