import { HttpClient, type HttpEvent } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';
import { FILE_UPLOAD_URI } from './file-upload.token';

@Injectable()
export class FileUploadService {
  readonly #http = inject(HttpClient);
  readonly #url = inject(FILE_UPLOAD_URI);

  /**
   * Upload file to server and report progress.
   *
   * @param {File} file File to upload.
   * @returns {Observable<HttpEvent<Object>>} Observable of upload http event.
   */
  upload(file: File): Observable<HttpEvent<Object>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.#http.post(`${this.#url}/upload`, formData, {
      // headers: {
      //   'Content-Type': file.type,
      // },
      reportProgress: true,
      observe: 'events',
    });
  }
}
