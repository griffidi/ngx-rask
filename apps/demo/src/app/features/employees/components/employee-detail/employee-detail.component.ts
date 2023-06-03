import type { Employee } from '#/app/types/graphql';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatButtonModule, MatInputModule, NgIf],
  styles: [
    `
      :host {
        inline-size: 700px;

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }

      .mat-mdc-form-field {
        inline-size: 100%;
      }

      footer {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
  template: `
    <ng-container *ngIf="_employee() as model">
      <form #form="ngForm">
        <div class="row">
          <mat-form-field>
            <mat-label>First Name</mat-label>
            <input
              matInput
              name="firstName"
              placeholder="First Name"
              [ngModel]="model.firstName" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Last Name</mat-label>
            <input
              matInput
              name="lastName"
              placeholder="Last Name"
              [ngModel]="model.lastName" />
          </mat-form-field>
        </div>

        <div class="row">
          <mat-form-field>
            <mat-label>Email</mat-label>
            <input
              matInput
              type="email"
              name="email"
              placeholder="Email"
              [ngModel]="model.email" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Phone</mat-label>
            <input
              matInput
              name="phone"
              type="phone"
              placeholder="Phone"
              [ngModel]="model.phone" />
          </mat-form-field>
        </div>

        <footer>
          <button
            mat-stroked-button
            color="primary">
            Save
          </button>
          <button mat-button>Cancel</button>
        </footer>
      </form>
    </ng-container>
  `,
})
export class EmployeeDetailComponent {
  @Input({ required: true }) set employee(value: Employee) {
    this._employee.set(value);
  }
  protected _employee = signal<Employee>({} as Employee);
}
