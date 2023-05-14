import { AuthService } from '#/app/common/auth';
import { slideInAnimation } from '#/app/common/router';
import { LayoutFooter, LayoutHeader } from '#/app/ui/layout';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    MatSidenavModule,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  animations: [slideInAnimation],
})
export default class Layout {
  protected readonly authService = inject(AuthService);
  protected readonly isAuthenticated = computed(() => this.authService.isAuthenticated());
  protected readonly userInitials = computed(() => {
    const { firstName = '', lastName = '' } = this.authService.user() ?? {};
    return `${firstName[0]}${lastName[0]}`;
  });

  @ViewChild(MatDrawer) private readonly drawer!: MatDrawer;

  protected logout() {
    this.authService.logout();
  }

  protected toggleDrawer() {
    this.drawer.toggle();
  }
}
