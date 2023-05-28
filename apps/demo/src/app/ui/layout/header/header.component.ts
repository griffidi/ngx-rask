import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { RkBreadcrumbs } from '@ngx-rask/components';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <nav>
        <ng-content></ng-content>
        <a
          class="nav-link brand"
          routerLink="/">
          ngx-rask demo
        </a>
      </nav>

      <rk-breadcrumbs></rk-breadcrumbs>

      <button
        *ngIf="isAuthenticated"
        mat-mini-fab
        [matMenuTriggerFor]="menu">
        {{ userInitials }}
      </button>
      <mat-menu #menu="matMenu">
        <button
          mat-menu-item
          (click)="logout.emit()">
          Logout
        </button>
      </mat-menu>
    </header>
  `,
  styles: [
    `
      header,
      nav {
        display: flex;
        align-items: center;
      }

      header {
        gap: 40px;
        inline-size: 100%;
        padding-inline: var(--app-site-header-footer-padding);
        block-size: var(--app-site-header-block-size);
        background: var(--app-color-background);
        overflow: hidden;
      }

      nav {
        gap: 20px;
      }

      rk-breadcrumbs {
        flex: 1;
      }

      .nav-link {
        font-size: 1.2rem;
      }

      .brand {
        font-size: 1.9em;
        line-height: 1.9;
        font-weight: 600;
        background-image: var(--app-color-linear-gradient-primary-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .mdc-fab {
        --_color: var(--app-color-text-dark-1);

        background: transparent;
        border: 1px solid var(--_color);
        color: var(--_color);

        &:hover {
          --_color: var(--app-color-accent);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatMenuModule, NgIf, RkBreadcrumbs, RouterLink],
})
export default class LayoutHeader {
  @Input({ required: true }) isAuthenticated = false;
  @Input({ required: true }) userInitials = '';
  @Output() logout = new EventEmitter();
}
