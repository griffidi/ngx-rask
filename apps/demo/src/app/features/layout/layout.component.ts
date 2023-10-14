import { AuthService } from '#/app/common/auth';
import { slideInAnimation } from '#/app/common/router';
import { LayoutHeader } from '#/app/ui/layout';
import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommandPaletteService } from '@ngx-rask/components';
import { RxFor } from '@rx-angular/template/for';
import routes, { nonNavRoutePaths } from './routes';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    // LayoutFooter,
    LayoutHeader,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RxFor,
  ],
  animations: [slideInAnimation],
  styles: [
    `
      :host {
        --mat-sidenav-scrim-color: var(--app-scrim-color);
        --_toggle-button-offset: 20px;

        display: block;
        block-size: calc(100% - var(--app-site-header-block-size));
      }

      .mat-drawer-container {
        position: static;
        block-size: 100%;
        background: var(--app-color-background);
      }

      .mat-drawer {
        inline-size: 300px;
        background: var(--app-color-surface-2);
        border-start-end-radius: 25px;
        border-end-end-radius: 25px;
      }

      ::ng-deep .mat-drawer-backdrop.mat-drawer-shown {
        background-color: rgba(189, 189, 189, 0.05);
      }

      ::ng-deep .mat-drawer .mat-drawer-inner-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .mat-drawer-content {
        position: relative;
        overflow: hidden;

        section {
          block-size: 100%;

          & + router-outlet + * {
            padding-inline: var(--_toggle-button-offset);
            padding-block: var(--_toggle-button-offset);
          }
        }
      }

      .drawer__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 16px;
        padding-block: 16px;

        & h3 {
          margin: 0;
        }
      }

      nav {
        & .nav-link {
          display: flex;
          align-items: center;
          inline-size: 100%;
          block-size: 48px;
          padding-inline: 18px;
          gap: 30px;
          color: var(--app-color-text-dark-1);

          /* &:focus, */
          &:hover {
            outline: none;
            background: var(--app-color-background-hover);
          }

          &.active {
            color: var(--app-color-accent);
          }
        }
      }
    `,
  ],
})
export default class Layout {
  readonly #commandPaletteService = inject(CommandPaletteService);

  /**
   * Authentication properties.
   */
  protected readonly authService = inject(AuthService);
  protected readonly isAuthenticated = computed(() => this.authService.isAuthenticated());
  protected readonly userInitials = computed(() => {
    const { firstName = '', lastName = '' } = this.authService.user() ?? {};
    return `${firstName[0]}${lastName[0]}`;
  });

  /**
   * Drawer open properties.
   */
  protected readonly drawerOpen = signal(false);
  protected isDrawerOpen = false;

  /**
   * Navigation routes to render in drawer.
   */
  protected readonly routes = signal(
    routes
      .filter(({ path }) => !nonNavRoutePaths.includes(path))
      .map(({ data, path, title }) => ({ data, path, title }))
  );

  constructor() {
    effect(() => {
      this.isAuthenticated()
        ? this.#commandPaletteService.subscribe()
        : this.#commandPaletteService.unsubscribe();
    });

    effect(() => (this.isDrawerOpen = this.drawerOpen()));
  }

  protected logout() {
    this.authService.logout();
  }

  protected onNavigate() {}

  protected onSearchClicked() {
    this.#commandPaletteService.show();
  }
}
