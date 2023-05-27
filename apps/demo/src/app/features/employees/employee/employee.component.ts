import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Employee {}
