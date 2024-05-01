import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-and-favorites',
  standalone: true,
  imports: [],
  templateUrl: './cart-and-favorites.component.html',
  styleUrl: './cart-and-favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartAndFavoritesComponent {
  @Input() title!: string;
}
