import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../common/auth/auth.service';
import { LayoutFooter, LayoutHeader } from '../ui/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutFooter, LayoutHeader, MatButtonModule, MatIconModule, MatSidenavModule, NgIf, RouterOutlet],
})
export default class Layout {
  protected readonly authService = inject(AuthService);
}
