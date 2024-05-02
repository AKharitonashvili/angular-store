import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IsInItemsPipe } from '../../pipes/is-favorite/is-in-items.pipe';
import { FavoriteIconComponent } from '../buttons/favorite-icon/favorite-icon.component';
import { MinimizeTextPipe } from '../../pipes/minimize-text/minimize-text.pipe';
import {
  ProductInterface,
  SelectedProductInterface,
} from '../../interfaces/interfaces';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatIconModule,
    IsInItemsPipe,
    FavoriteIconComponent,
    MinimizeTextPipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) favorites!: SelectedProductInterface[] | undefined;
  @Input({ required: true }) item!: ProductInterface;

  @Output() navigate = new EventEmitter<string>();
  @Output() emitToggleFavorites = new EventEmitter<{
    isFavorite: boolean;
    item: ProductInterface;
  }>();
}
