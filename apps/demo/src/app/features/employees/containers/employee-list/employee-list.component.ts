import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatListOption } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { RkSelect, RkSelectionList, type RkListOption } from '@ngx-rask/components';
import { FixedSizeVirtualScrollStrategy } from '@rx-angular/template/experimental/virtual-scrolling';
import { RxFor } from '@rx-angular/template/for';
import { DepartmentListOptionsDirective } from 'apps/demo/src/app/components';
import { EmployeesStore } from '../../store/employees.store';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FixedSizeVirtualScrollStrategy,
    MatIconModule,
    MatInputModule,
    MatListModule,
    NgClass,
    ScrollingModule,
    RkSelect,
    RkSelectionList,
    RouterLink,
    RxFor,
    DepartmentListOptionsDirective,
  ],
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 400px 1fr;
      }

      .filter-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 1rem;
        margin-block-start: 8px;
      }

      .virtual-viewport {
        inline-size: 100%;
        block-size: calc(100dvh - var(--app-site-header-block-size));
      }

      /* :host
        ::ng-deep
        .mat-mdc-list-option
        .mdc-checkbox
        .mdc-checkbox__native-control:enabled:checked
        ~ .mdc-checkbox__background,
      :host
        ::ng-deep
        .mat-mdc-list-option
        .mdc-checkbox
        .mdc-checkbox__native-control:enabled:indeterminate
        ~ .mdc-checkbox__background,
      :host
        ::ng-deep
        .mat-mdc-list-option
        .mdc-checkbox
        .mdc-checkbox__native-control[data-indeterminate='true']:enabled
        ~ .mdc-checkbox__background {
        --mdc-checkbox-selected-icon-color: red;
        --mdc-checkbox-hover-state-layer-icon-color: red;
      } */

      mat-list-item.mat-mdc-list-item {
        --_list-item-background-color: var(--app-color-surface-1);

        inline-size: 600px;
        block-size: 63px;
        margin-inline: auto;
        margin-block-start: 1rem;
        border-radius: var(--app-shape-small);
        background: var(--_list-item-background-color);

        &:hover {
          --_list-item-background-color: var(--app-color-background-hover);
        }

        .mat-icon {
          --_avatar-icon-size: 36px;

          font-size: var(--_avatar-icon-size);
          inline-size: var(--_avatar-icon-size);
          block-size: var(--_avatar-icon-size);
          font-variation-settings: 'FILL' 1;

          &.male {
            color: var(--app-color-blue-light);
          }

          &.female {
            color: var(--app-color-magenta);
          }
        }
      }

      .filter {
        inline-size: 50%;
      }
    `,
  ],
  template: `
    <div class="filter-container">
      <rk-selection-list
        appDepartmentListOptions
        [multiple]="true"
        [(selectedOptions)]="selectedDepartments" />
    </div>

    <mat-nav-list>
      <cdk-virtual-scroll-viewport
        class="virtual-viewport"
        scrollable
        [itemSize]="50">
        <mat-list-item
          *cdkVirtualFor="let item of employees()"
          [routerLink]="['/employees', item.id]">
          <span matListItemTitle>{{ item.firstName }} {{ item.lastName }}</span>
          <span matListItemLine>{{ item.jobTitle }}</span>
          <span matListItemMeta>{{ item.department.name }}</span>
          <mat-icon
            matListItemAvatar
            class="{{ item.gender === 'Male' ? 'male' : 'female' }}">
            account_circle
          </mat-icon>
        </mat-list-item>
      </cdk-virtual-scroll-viewport>
    </mat-nav-list>
  `,
})
export default class EmployeeList {
  #selectedDepartments: MatListOption[] = [];
  #employeesStore = inject(EmployeesStore);

  protected set selectedDepartments(value: RkListOption<string>[]) {
    this.#selectedDepartments = value;
    this.#employeesStore.setFilter({ departmentIds: value.map(({ value }) => value) });
  }
  protected get selectedDepartments(): RkListOption<string>[] {
    return this.#selectedDepartments;
  }

  protected readonly employees = this.#employeesStore.filteredEmployees;
}
