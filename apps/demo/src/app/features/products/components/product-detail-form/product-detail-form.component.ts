import type { Product } from '#/app/types/graphql';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  signal,
  type AfterViewInit,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product-detail-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: var(--app-color-surface-2);
        border-radius: var(--app-shape-small);
        inline-size: 600px;
        padding-inline: 20px;
        padding-block: 20px;
      }

      .row {
        display: flex;
        gap: 20px;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
    `,
  ],
  template: `
    <form
      #form="ngForm"
      (ngSubmit)="onSubmit()">
      <div class="row">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input
            matInput
            name="name"
            [ngModel]="_product().name"
            name="name" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Cost</mat-label>
          <input
            matInput
            name="price"
            [ngModel]="_product().cost"
            name="price" />
        </mat-form-field>
      </div>

      <footer>
        <button
          mat-raised-button
          color="primary"
          type="submit">
          Save
        </button>
        <button
          mat-stroked-button
          routerLink="/products"
          (click)="onCancel()">
          Cancel
        </button>
      </footer>
    </form>
  `,
})
export default class ProductDetailFormComponent implements AfterViewInit {
  protected readonly _product = signal<Product>({} as Product);

  @Input({ required: true }) set product(value: Product) {
    this._product.set(value);
  }

  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild('form') form!: NgForm;

  ngAfterViewInit() {
    this.form.valueChanges?.pipe(
      tap(value => {
        console.log(value);
      })
    );
  }

  onSubmit() {
    this.save.emit(this.form.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
