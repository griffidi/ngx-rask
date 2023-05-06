import { HttpClient, HttpResponse, type HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, lastValueFrom, map } from 'rxjs';
import { ApiConfiguration, RequestBuilder, type StrictHttpResponse } from '../api';
import { BaseApiClient } from '../api/base-api.service';
import type { LoginUser, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseApiClient {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/users/login';

  /**
   * Existing user login.
   *
   * Login for existing user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(
    params: {
      body: {
        user: LoginUser;
      };
    },
    context?: HttpContext
  ): Promise<{
    user: User;
  }> {
    return lastValueFrom(
      this.login$Response(params, context).pipe(
        map(
          (
            r: StrictHttpResponse<{
              user: User;
            }>
          ) =>
            r.body as {
              user: User;
            }
        )
      )
    );
  }

  /**
   * Existing user login.
   *
   * Login for existing user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(
    params: {
      body: {
        user: LoginUser;
      };
    },
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      user: User;
    }>
  > {
    const rb = new RequestBuilder(this.rootUrl, UserService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<{
            user: User;
          }>;
        })
      );
  }
}
