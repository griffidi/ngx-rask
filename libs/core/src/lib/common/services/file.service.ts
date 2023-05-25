import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError, map } from 'rxjs';

@Injectable()
export class FileService {
  #http = inject(HttpClient);
  #sanitizer = inject(DomSanitizer);

  getSafeHtml(path: string) {
    return this.#http
      .get(path, {
        responseType: 'text',
      })
      .pipe(
        map(svg => this.#sanitizer.bypassSecurityTrustHtml(svg)),
        catchError(error => {
          console.error('Failed to load image', error);
          return [];
        })
      );
  }
}
