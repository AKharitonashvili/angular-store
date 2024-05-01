import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartAndFavoritesComponent } from '../../shared/ui/wrappers/cart-and-favorites/cart-and-favorites.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartAndFavoritesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {}
