import { AuthService } from '#/app/common/auth';
import { slideInAnimation } from '#/app/common/router';
import { LayoutHeader } from '#/app/ui/layout';
import { DOCUMENT, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewChild,
  computed,
  inject,
  type AfterViewInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styles: [
    `
      :host {
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

        & section {
          block-size: 100%;
          padding-inline: var(--_toggle-button-offset);
          padding-block: var(--_toggle-button-offset);
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
  ],
  animations: [slideInAnimation],
})
export default class Layout implements AfterViewInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);

  protected readonly authService = inject(AuthService);
  protected readonly isAuthenticated = computed(() => this.authService.isAuthenticated());
  protected readonly userInitials = computed(() => {
    const { firstName = '', lastName = '' } = this.authService.user() ?? {};
    return `${firstName[0]}${lastName[0]}`;
  });

  @ViewChild(MatDrawer) private readonly _drawer: MatDrawer | undefined;

  ngAfterViewInit() {
    if (this._drawer) {
      this._drawer._content.nativeElement.focus();
      // close drawer when nav-link is clicked
      const links = this.#document.querySelectorAll('nav .nav-link');
      fromEvent(links, 'click')
        .pipe(
          takeUntilDestroyed(this.#destroyRef),
          tap(() => this._drawer?.close())
        )
        .subscribe();
    }
  }

  protected logout() {
    this.authService.logout();
  }

  protected toggleDrawer() {
    this._drawer?.toggle();
  }
}
