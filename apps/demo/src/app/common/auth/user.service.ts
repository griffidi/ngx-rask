import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class UserService {
  readonly #client = inject(Client);
}
