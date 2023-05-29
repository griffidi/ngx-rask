import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteTitleStrategy implements TitleStrategy {
  #title = inject(Title);

  updateTitle(snapshot: RouterStateSnapshot): void {
    throw new Error('Method not implemented.');
  }

  buildTitle(snapshot: RouterStateSnapshot): string | undefined {
    throw new Error('Method not implemented.');
  }

  getResolvedTitleForRoute(snapshot: ActivatedRouteSnapshot) {
    throw new Error('Method not implemented.');
  }
}
