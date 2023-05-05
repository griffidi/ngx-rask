import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../common/services';
import { FooterComponent, HeaderComponent } from '../ui/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FooterComponent, HeaderComponent, MatSidenavModule, RouterOutlet],
})
export class LayoutComponent {
  protected readonly authService = inject(AuthService);
}
