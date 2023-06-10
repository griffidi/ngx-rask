import type { Employee } from '#/app/types/graphql';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    <ng-container *ngIf="employee() as employee">
      <app-employee-detail
        [employee]="employee"
        (update)="onUpdate($event)" />
    </ng-container>
  `,
})
export default class EmployeeComponent {
  #store = inject(EmployeesStore);
  #toast = inject(ToastrService);

  protected readonly employee = this.#store.selectedEmployee;

  @Input({ required: true }) set id(value: string) {
    this.#store.setSelectedEmployeeId(value);
  }

  async onUpdate(event: Employee) {
    await this.#store.updateEmployee(event);
    this.#toast.success('Updated employee successfully', 'Update');
  }
}
