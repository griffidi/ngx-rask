import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injector,
  Input,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Routes } from '@angular/router';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterStateSnapshot,
  type ResolveFn,
} from '@angular/router';
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
    <nav *ngIf="paths().length">
      <ul>
        <li *ngFor="let route of paths(); let first = first">
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
        gap: 2px;
        list-style: none;
        padding-inline: 8px;
        padding-block: 0;
      }

      li {
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;
      }

      a {
        --_link-color: var(--app-nav-link-color);
        --_link-border-color: transparent;

        padding-inline: 6px;
        padding-block: 4px;
        text-decoration: none;
        border: 1px solid var(--_link-border-color);
        border-radius: var(--app-shape-small);
        color: var(--_link-color);
        transition:
          color 200ms ease-in-out,
          border-color 200ms ease-in-out;

        &:hover {
          --_link-color: var(--app-color-accent);
          --_link-border-color: var(--app-color-accent);
        }
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

  protected paths = signal<BreadcrumbPath[]>([]);

  @Input({ required: true }) routes!: Routes;

  constructor() {
    const destroyRef = inject(DestroyRef);
    const { events } = inject(Router);
    const route = inject(ActivatedRoute);

    events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(async () => this.paths.set(await this.#createBreadcrumbs(route.root))),
        takeUntilDestroyed(destroyRef)
      )
      .subscribe();
  }

  /**
   * Create breadcrumb tree from the current route.
   */
  async #createBreadcrumbs(route: ActivatedRoute): Promise<BreadcrumbPath[]> {
    // default path and title.
    const { path: defaultpath, title: defaultTitle } = this.routes.find(({ path }) => path === '')!;

    const tree = await this.#buildRouteTree(route);

    /**
     * if the tree only contains the default path, return an empty tree.
     * if the current route is the default path, you don't need to show
     * it in the breadcrumbs.
     */
    if (tree.length === 1 && tree[0].title === defaultTitle) {
      return [];
    }

    // if the tree already contains the default path and title, return the tree.
    if (tree.some(({ title }) => title === defaultTitle)) {
      return tree;
    }

    // add default path and title to the tree.
    // NOTE: pass variables in template strings to force as string
    return [{ title: `${defaultTitle}`, paths: [`${defaultpath}`] }, ...tree];
  }

  /**
   * Recursively build the route tree.
   */
  async #buildRouteTree(
    route: ActivatedRoute,
    paths: string[] = [],
    routes: BreadcrumbPath[] = []
  ): Promise<BreadcrumbPath[]> {
    for (const child of route.children) {
      const { url } = child.snapshot;
      const title = await this.#getRouteTitle(child);

      // if the route has a title and is not already in the tree, add it.
      if (title && !routes.some(r => r.title === title)) {
        paths = paths.concat(url.map(({ path }) => path));
        routes.push({ title, paths: [...paths] });
      }

      return this.#buildRouteTree(child, paths, routes);
    }

    return routes;
  }

  #getRouteTitle(route: ActivatedRoute): Promise<string | undefined> {
    return new Promise(resolve => {
      const title = route.routeConfig?.title as undefined | string | ResolveFn<string>;

      // if router title is ResolveFn, run inside injection context.
      if (typeof title === 'function') {
        runInInjectionContext(this.#injector, () =>
          resolve(title(route.snapshot, {} as RouterStateSnapshot) as string)
        );
        return;
      }

      resolve(title);
    });
  }
}
