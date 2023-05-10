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
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService, FormErrorsService],
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
})
export default class Login {
  protected form = new FormBuilder().nonNullable.group(
    {
      userName: ['', Validators.required],
      password: ['', Validators.required],
    },
    { updateOn: 'blur' }
  );

  protected readonly loginService = inject(LoginService);

  onSubmit() {
    const { userName = '', password = '' } = this.form.value;
    this.loginService.login({ userName, password });
  }
}
