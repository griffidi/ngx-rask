import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssVariable',
  standalone: true,
  pure: true,
})
export class CssVariablePipe implements PipeTransform {
  transform(value: string = ''): any {
    return `var(${value})`;
  }
}
