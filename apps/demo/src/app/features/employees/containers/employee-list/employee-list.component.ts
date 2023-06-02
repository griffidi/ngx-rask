import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {
  FixedSizeVirtualScrollStrategy,
  RxVirtualFor,
  RxVirtualScrollViewportComponent,
} from '@rx-angular/template/experimental/virtual-scrolling';
// import { RxFor } from '@rx-angular/template/for';
import { EmployeesStore } from '../../store/employees.store';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  template: `
    <mat-list>
      <rx-virtual-scroll-viewport
        class="virtual-viewport"
        [itemSize]="50">
        <mat-list-item *rxVirtualFor="let item of employees(); trackBy: 'id'">
          <span matListItemTitle>{{ item.firstName }} {{ item.lastName }}</span>
          <span matListItemLine>{{ item.jobTitle }}</span>
          <span matListItemMeta>{{ item.department.name }}</span>
        </mat-list-item>
      </rx-virtual-scroll-viewport>
    </mat-list>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-content: center;
      }

      .mat-mdc-list {
        block-size: 100%;
        inline-size: 100%;
      }

      .mat-mdc-list,
      :host ::ng-deep .rx-virtual-scroll__viewport {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        inline-size: 100%;
        block-size: calc(100dvh - var(--app-site-header-block-size));
        flex: 1;
      }

      .mat-mdc-list-item {
        --_list-item-color: transparent;
        --_lite-item-transform-scale: 1;

        inline-size: 600px;
        block-size: 63px;
        border-radius: var(--app-shape-small);
        background: var(--app-color-surface-1);
        border: 1px solid var(--_list-item-color);
        transform: scale(var(--_lite-item-transform-scale));
        transition: transform 100ms ease-in-out;

        &:hover {
          --_list-item-color: var(--app-color-accent);
          --_lite-item-transform-scale: 1.02;
        }
      }

      .filter {
        inline-size: 50%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FixedSizeVirtualScrollStrategy,
    MatInputModule,
    MatListModule,
    // RxFor,
    RxVirtualFor,
    RxVirtualScrollViewportComponent,
  ],
})
export default class EmployeeList {
  #employeesStore = inject(EmployeesStore);
  // #router = inject(Router);

  protected readonly employees = this.#employeesStore.employees;
}
