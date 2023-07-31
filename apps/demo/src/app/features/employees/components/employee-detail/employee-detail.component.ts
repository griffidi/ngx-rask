import { IMAGE_PATH_TOKEN } from '#/app/common/*';
import type { Employee } from '#/app/types/graphql';
import { DatePipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RkFileUpload, RkSelect, RkSvg } from '@ngx-rask/components';
import {
  DepartmentSelectOptionsDirective,
  LocationStateSelectOptionsDirective,
} from 'apps/demo/src/app/components';

/**
 * Generate employee profile image path. If employee imagePath is undefined,
 * use the default avatar image path.
 */
function generateImagePath({ imagePath }: Employee, assetsImagePath: string): string {
  return imagePath ?? `${assetsImagePath}/avatar/avatar-outline.svg`;
}

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DatePipe,
    FormsModule,
    DepartmentSelectOptionsDirective,
    LocationStateSelectOptionsDirective,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    NgIf,
    RkSelect,
    RkSvg,
    RkFileUpload,
  ],
  styles: [
    `
      :host {
        --_row-gap: 20px;

        form {
          display: flex;
          flex-direction: column;
          gap: var(--_row-gap);
          inline-size: 700px;
        }
      }

      .row {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2rem;

        &.group {
          margin-block-start: calc(var(--_row-gap) * 2);
        }

        &.row-50 > * {
          inline-size: 50%;
          align-items: flex-start;
        }

        &.flex-end {
          justify-content: flex-end;
          gap: 10px;
        }
      }

      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.upload {
          flex-direction: row;
          justify-content: space-between;
        }

        > label {
          color: var(--app-color-label-1);
        }
      }

      .mat-mdc-form-field {
        inline-size: 100%;
      }

      .updated {
        justify-self: flex-end;
        color: var(--app-color-text-dark-3);
        font-size: 0.8rem;
        font-weight: 300;
        font-style: italic;
      }

      .avatar {
        inline-size: 132px;
        block-size: 132px;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
    `,
  ],
  template: `
    <ng-container *ngIf="_employee() as model">
      <form #form="ngForm">
        <div class="row flex-end">
          <span
            *ngIf="model.dateUpdated"
            class="updated">
            Updated {{ model.dateUpdated | date: 'yyyy-MM-dd' }}
          </span>
        </div>

        <div class="row">
          <mat-form-field>
            <mat-label>First name</mat-label>
            <input
              matInput
              name="firstName"
              placeholder="First name"
              [ngModel]="model.firstName" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Last name</mat-label>
            <input
              matInput
              name="lastName"
              placeholder="Last name"
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

        <div class="row row-50">
          <div class="input-container">
            <label>Gender</label>
            <mat-radio-group
              aria-label="Select an gender"
              name="gender"
              color="primary"
              [value]="model.gender">
              <mat-radio-button value="Male">Male</mat-radio-button>
              <mat-radio-button value="Female">Female</mat-radio-button>
            </mat-radio-group>
          </div>
          <div class="input-container upload">
            <rk-file-upload
              fileType="image/svg"
              [uploadComplete]="fileUploadComplete" />
            <rk-svg
              width="32px"
              height="32px"
              class="avatar"
              [path]="profileImagePath()"></rk-svg>
          </div>
        </div>

        <div class="row group">
          <rk-select
            appDepartmentSelectOptions
            [value]="model.departmentId" />
          <mat-form-field>
            <mat-label>Job title</mat-label>
            <input
              matInput
              name="jobTitle"
              placeholder="Job title"
              [ngModel]="model.jobTitle" />
          </mat-form-field>
        </div>

        <div class="row row-50">
          <mat-form-field>
            <mat-label>Start date</mat-label>
            <input
              matInput
              name="dateStarted"
              [matDatepicker]="picker"
              [ngModel]="model.dateStarted" />
            <mat-datepicker-toggle
              matIconSuffix
              [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker
              #picker
              color="primary"></mat-datepicker>
          </mat-form-field>
        </div>

        <div class="row group">
          <mat-form-field>
            <mat-label>Street address</mat-label>
            <input
              matInput
              name="gender"
              placeholder="Street address"
              [ngModel]="model.streetAddress" />
          </mat-form-field>
        </div>

        <div class="row">
          <mat-form-field>
            <mat-label>City</mat-label>
            <input
              matInput
              name="city"
              placeholder="City"
              [ngModel]="model.city" />
          </mat-form-field>

          <rk-select
            appLocationStateSelectOptions
            label="State"
            [value]="model.stateId" />

          <mat-form-field>
            <mat-label>Zip code</mat-label>
            <input
              matInput
              name="zipCode"
              placeholder="Zip code"
              [ngModel]="model.zipCode" />
          </mat-form-field>
        </div>

        <footer>
          <button
            mat-flat-button
            color="primary">
            Save
          </button>
          <button mat-stroked-button>Cancel</button>
        </footer>
      </form>
    </ng-container>
  `,
})
export class EmployeeDetailComponent {
  readonly #imagePath = inject(IMAGE_PATH_TOKEN);

  protected profileImagePath = computed(() => generateImagePath(this._employee(), this.#imagePath));

  @Input({ required: true }) set employee(value: Employee) {
    this._employee.set(value);
  }
  get employee(): Employee {
    return this._employee();
  }
  protected readonly _employee = signal<Employee>({} as Employee);

  @Output() update = new EventEmitter<Employee>();

  protected onSave() {
    this.update.emit(this._employee() as Employee);
  }
}
