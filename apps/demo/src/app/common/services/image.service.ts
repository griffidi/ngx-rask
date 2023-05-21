import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { catchError, map } from 'rxjs';

@Injectable()
export class ImageService {
  #http = inject(HttpClient);
  #sanitizer = inject(DomSanitizer);

  async getImage(path: string) {
    return new Promise<SafeHtml>((resolve, reject) => {
      this.#http
        .get(path, {
          responseType: 'text',
        })
        .pipe(
          map(svg => resolve(this.#sanitizer.bypassSecurityTrustHtml(svg))),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
