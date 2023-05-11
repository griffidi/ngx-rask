import { AuthService } from '#/app/common/auth';
import { LayoutFooter, LayoutHeader } from '#/app/ui/layout';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayoutFooter,
    LayoutHeader,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export default class Layout {
  protected readonly authService = inject(AuthService);
  protected readonly isAuthenticated = computed(() => this.authService.isAuthenticated());
  protected readonly userInitials = computed(() => {
    const { firstName = '', lastName = '' } = this.authService.user() ?? {};
    return `${firstName[0]}${lastName[0]}`;
  });

  @ViewChild(MatDrawer) private readonly drawer!: MatDrawer;

  protected logout(): void {
    this.authService.logout();
  }

  protected toggleDrawer(): void {
    this.drawer.toggle();
  }
}
