import { Component, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './common/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
})
export class AppComponent implements OnInit {
  protected readonly authService = inject(AuthService);

  ngOnInit() {
    this.authService.refresh();
  }
}
