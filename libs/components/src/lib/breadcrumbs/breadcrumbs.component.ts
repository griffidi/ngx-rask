import routes from '#/app/features/layout/routes';
import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injector,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, tap } from 'rxjs';
import { RkSvgDivider } from '../svg-divider';

/**
 * Breadcrumb path.
 */
interface BreadcrumbPath {
  paths: string[];
  title: string | undefined;
}

@Component({
  selector: 'rk-breadcrumbs',
  standalone: true,
  template: `
    <nav *ngIf="routes().length">
      <ul>
        <li *ngFor="let route of routes(); let first = first">
          <rk-svg-divider
            *ngIf="!first"
            [dividerType]="'right-arrow'"></rk-svg-divider>
          <a
            class="nav-link"
            [routerLink]="route.paths">
            {{ route.title }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      ul {
        display: inline-flex;
        gap: 10px;
        list-style: none;
        padding-inline: 8px;
        padding-block: 0;
        /* background: var(--app-color-surface-3); */
        border-radius: var(--app-shape-small);
      }

      li {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;

        &:hover {
          rk-svg-divider {
            --rk-svg-divider-path-color: var(--app-color-accent);
          }

          svg,
          a {
            color: var(--app-color-accent);
          }
        }
      }

      a {
        padding-block: 8px;
        text-decoration: none;
      }

      rk-svg-divider {
        inline-size: 16px;
        block-size: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, RkSvgDivider, RouterLink],
})
export class RkBreadcrumbs {
  #injector = inject(Injector);

  protected routes = signal<BreadcrumbPath[]>([]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    const { events } = inject(Router);
    const route = inject(ActivatedRoute);

    events
      .pipe(
        takeUntilDestroyed(destroyRef),
        filter(event => event instanceof NavigationEnd),
        tap(() => this.routes.set(this.#createBreadcrumbs(route.root)))
      )
      .subscribe();
  }

  /**
   * Create breadcrumb tree from the current route.
   */
  #createBreadcrumbs(route: ActivatedRoute): BreadcrumbPath[] {
    // default path and title.
    const { path: defaultpath, title: defaultTitle } = routes.find(({ path }) => path === '')!;

    const tree = this.#buildRouteTree(route);

    // if the tree already contains the default path and title, return the tree.
    if (tree.some(({ title }) => title === defaultTitle)) {
      return tree;
    }

    // add default path and title to the tree.
    return [{ title: defaultTitle, paths: [defaultpath] }, ...tree];
  }

  /**
   * Recursively build the route tree.
   */
  #buildRouteTree(
    route: ActivatedRoute,
    paths: string[] = [],
    routes: BreadcrumbPath[] = []
  ): BreadcrumbPath[] {
    for (const child of route.children) {
      const { url } = child.snapshot;
      const { title: titleStrOrFn } = child.routeConfig ?? {};
      let title: string | undefined;

      if (typeof titleStrOrFn === 'function') {
        runInInjectionContext(this.#injector, () => {
          title = (titleStrOrFn as Function)(child.snapshot);
        });
      } else {
        title = titleStrOrFn;
      }

      // if the route has a title and is not already in the tree, add it.
      if (title && !routes.some(r => r.title === title)) {
        paths = paths.concat(url.map(({ path }) => path));
        routes.push({ title, paths: [...paths] });
      }

      return this.#buildRouteTree(child, paths, routes);
    }

    return routes;
  }
}
