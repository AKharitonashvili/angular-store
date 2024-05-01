import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IsInItemsPipe } from '../../../pipes/is-favorite/is-in-items.pipe';

@Component({
  selector: 'app-favorite-icon',
  standalone: true,
  imports: [IsInItemsPipe, MatIconModule, CommonModule],
  templateUrl: './favorite-icon.component.html',
  styleUrl: './favorite-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteIconComponent {
  @Input() isFavorite!: boolean;
  @Output() favoriteClick = new EventEmitter<boolean>();

  emitFavoriteClick() {
    this.favoriteClick.emit(this.isFavorite);
  }
}
