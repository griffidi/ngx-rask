import type { LoginUser } from '#/app/common/models';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormErrorsService } from '../common/form-errors';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [LoginService, FormErrorsService],
})
export default class Login {
  protected readonly loginService = inject(LoginService);

  protected loginUser: LoginUser = { email: '', password: '' };
}
