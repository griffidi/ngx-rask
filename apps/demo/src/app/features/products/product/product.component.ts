import { IMAGE_PATH_TOKEN } from '#/app/common/assets';
import { GetProductByIdDocument, type Product as ProductType } from '#/app/types/graphql';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, inject, signal, type OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CreatePathPipe } from '@ngx-rask/core';
import { Client } from '@ngx-rask/graphql';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CreatePathPipe, MatButtonModule, MatInputModule, NgIf, ReactiveFormsModule],
})
export default class Product implements OnInit {
  #client = inject(Client);

  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly product = signal<ProductType>({} as ProductType);
  protected readonly productImageName = computed(() => {
    const { name } = this.product();

    return `${name}-black-1`;
  });

  protected form = new FormBuilder().nonNullable.group({
    name: ['', Validators.required],
  });

  @Input({ required: true }) accessor id!: string;

  async ngOnInit() {
    const { product } = await this.#client.query(GetProductByIdDocument, { id: this.id });
    this.product.set(product as ProductType);
  }

  onSubmit() {
    console.log('Product submitted');
  }
}
