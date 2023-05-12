import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
})
export default class Product {
  protected form = new FormBuilder().nonNullable.group({
    name: ['', Validators.required],
  });

  onSubmit() {
    console.log('Product submitted');
  }
}
