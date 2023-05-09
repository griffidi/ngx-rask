import { AuthService } from '#/app/common/auth';
import { LayoutFooter, LayoutHeader } from '#/app/ui/layout';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutFooter, LayoutHeader, MatButtonModule, MatIconModule, MatSidenavModule, NgIf, RouterOutlet],
})
export default class Layout {
  protected readonly authService = inject(AuthService);
  protected readonly isAuthenticated = computed(() => this.authService.isAuthenticated());
  protected opened = signal(false);

  protected logout(): void {
    this.authService.logout();
  }

  protected toggleDrawer(): void {
    this.opened.update(opened => !opened);
  }
}
