import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'createPath',
  standalone: true,
})
export class CreatePathPipe implements PipeTransform {
  transform(value: string, path: string): any {
    const resolvedPath = `${path}/${value.toLocaleLowerCase()}.jpg`;
    return resolvedPath;
  }
}
