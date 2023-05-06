import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormErrorsService } from '../common/form-service';
import type { LoginUser } from '../common/models';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [LoginService, FormErrorsService],
})
export default class Login {
  protected readonly loginService = inject(LoginService);

  protected loginUser: LoginUser = { email: '', password: '' };
}
