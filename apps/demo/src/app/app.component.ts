import { AuthService } from '#/app/common/auth';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
