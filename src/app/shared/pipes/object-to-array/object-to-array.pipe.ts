import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
  standalone: true,
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: Object): { key: string; value: any }[] {
    return Object.entries(value).map(entries => ({
      key: entries[0],
      value: entries[1],
    }));
  }
}
