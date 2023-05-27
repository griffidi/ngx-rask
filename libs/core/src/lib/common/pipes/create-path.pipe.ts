import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'createPath',
  standalone: true,
  pure: true,
})
export class CreatePathPipe implements PipeTransform {
  transform(value: string, path: string, subpath = value, ext = 'jpg'): any {
    value = value.toLocaleLowerCase().replace(/ /g, '-');
    const resolvedPath = `${path}/${subpath.toLocaleLowerCase()}/${value}.${ext}`;
    return resolvedPath;
  }
}
