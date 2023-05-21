import { IMAGE_PATH_TOKEN } from '#/app/common/assets';
import { ImageService, SizesService } from '#/app/common/services';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  computed,
  effect,
  inject,
  signal,
  type OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { type SafeHtml } from '@angular/platform-browser';
import { CreatePathPipe } from '@ngx-rask/core';
import { ProductsService } from '../../shared/services';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ImageService, ProductsService, SizesService],
  imports: [
    CreatePathPipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    NgClass,
    NgFor,
    NgIf,
    ReactiveFormsModule,
  ],
})
export default class ProductFormComponent implements OnInit {
  // #cdr = inject(ChangeDetectorRef);
  #injector = inject(Injector);
  #imageService = inject(ImageService);
  #productsService = inject(ProductsService);
  #sizesService = inject(SizesService);

  protected readonly colors = signal(['black', 'blue', 'green', 'pink', 'red', 'white']);
  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly product = this.#productsService.product;
  protected readonly productImageName = computed(() => `${this.product()?.name}-black-1`);
  protected readonly sizes = this.#sizesService.sizes;
  protected svg: SafeHtml | undefined;
  protected readonly selectedColor = signal('black');
  protected readonly hoveredColor = signal('default');

  protected form = new FormBuilder().nonNullable.group({
    name: ['', Validators.required],
    cost: [0, Validators.required],
  });

  @Input({ required: true }) accessor productId!: string;

  ngOnInit() {
    this.#sizesService.loadSizes();
    this.#productsService.loadProductById(this.productId);

    effect(
      async () => {
        const product = this.product();

        if (product) {
          const { cost, name } = product;
          const path = `${
            this.imagePath
          }/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.svg`;

          this.form.patchValue({ cost, name });
          const svg = await this.#imageService.getImage(path);
          this.svg = svg;
        }
      },
      { injector: this.#injector, allowSignalWrites: true }
    );
  }

  onSubmit() {
    console.log('Product submitted');
  }

  protected mouseoverColor(color: string) {
    this.hoveredColor.set(color);
  }

  protected mouseoutColor() {
    this.hoveredColor.set('default');
  }

  protected selectColor(color: string) {
    this.selectedColor.set(color);
  }
}
