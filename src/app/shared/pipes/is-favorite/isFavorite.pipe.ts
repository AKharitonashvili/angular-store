import { Pipe, PipeTransform } from '@angular/core';
import { SelectedProductInterface } from '../../interfaces/interfaces';

@Pipe({
  name: 'isFavorite',
  standalone: true,
})
export class IsFavoritePipe implements PipeTransform {
  transform(
    favorites: SelectedProductInterface[] | undefined,
    id: string
  ): boolean {
    return !!favorites?.find(f => f.id === id);
  }
}
