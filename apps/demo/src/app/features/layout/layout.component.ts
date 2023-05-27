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
  styleUrls: ['./layout.component.css'],
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
