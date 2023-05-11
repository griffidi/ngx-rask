import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export default class EmployeeList {}
