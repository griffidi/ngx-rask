import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { EmployeeDetailComponent } from '../../components';
import { EmployeesStore } from '../../store/employees.store';

@Component({
  selector: 'app-employee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmployeeDetailComponent, NgIf],
  host: {
    scrollable: '',
  },
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 40px;
        block-size: 100%;
      }
    `,
  ],
  template: `
    <!-- <ng-container *ngIf="employee() as employee"> -->
    <app-employee-detail [employee]="employee" />
    <!-- </ng-container> -->
  `,
})
export default class EmployeeComponent {
  #store = inject(EmployeesStore);

  protected readonly employee = this.#store.selectedEmployee;

  @Input({ required: true }) set id(value: string) {
    this.#store.setSelectedEmployeeId(value);
  }
}
