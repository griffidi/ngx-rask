import { IMAGE_PATH_TOKEN } from '#/app/common/assets';
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
import { RkFileUpload, RkSelect, RkSvg, type FileUploadCompleteEvent } from '@ngx-rask/components';
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
  templateUrl: './employee-detail.component.html',
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

  protected onFileUploadComplete(e: FileUploadCompleteEvent) {
    console.log(e);
  }
}
