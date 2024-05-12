import { Pipe, PipeTransform } from '@angular/core';
import { SelectedProductInterface } from '../../interfaces/interfaces';

@Pipe({
  name: 'isInItems',
  standalone: true,
})
export class IsInItemsPipe implements PipeTransform {
  transform(
    favorites: SelectedProductInterface[] | undefined,
    id: string | undefined
  ): boolean {
    return !!favorites?.find(f => f.id === id);
  }
}
