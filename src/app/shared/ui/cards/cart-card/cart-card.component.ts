import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SelectedProductInterface } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent {
  @Input() item!: SelectedProductInterface;
  @Output() remove = new EventEmitter<void>();
}
