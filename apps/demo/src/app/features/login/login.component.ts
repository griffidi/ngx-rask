import { FormErrorsService } from '#/app/common/form-errors';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styles: [
    `
      :host {
        display: grid;
        place-content: center;
        block-size: 100%;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        inline-size: 375px;
        padding-inline: 40px;
        padding-block-start: 40px;
        padding-block-end: 40px;
        background: var(--app-color-surface-2);
        border-radius: var(--app-shape-medium);
      }

      header,
      footer {
        inline-size: 100%;
      }

      button[type='submit'] {
        inline-size: 100%;
        color: var(--app-color-text-dark-1);
        background: var(--app-color-linear-gradient-primary-accent);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService, FormErrorsService],
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
})
export default class Login {
  protected form = new FormBuilder().nonNullable.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected readonly loginService = inject(LoginService);

  onSubmit() {
    const { userName = '', password = '' } = this.form.value;
    this.loginService.login({ userName, password });
  }
}
