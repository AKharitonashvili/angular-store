import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'minimizeText',
  standalone: true,
})
export class MinimizeTextPipe implements PipeTransform {
  transform(value: string, size: number): string {
    if (value.length >= size) return `${value.slice(0, size)}...`
    return value
  }
}
