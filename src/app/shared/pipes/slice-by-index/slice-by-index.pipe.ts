import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceByIndex',
  standalone: true,
})
export class SliceByIndexPipe implements PipeTransform {
  transform(value: any[] | undefined, index: number): any[] {
    if (!Array.isArray(value) || value.length === 0) {
      return [];
    }

    const endIndex = Math.min(index + 1, value.length);
    const startIndex = Math.max(0, endIndex - 6);
    return value.slice(startIndex, endIndex);
  }
}
