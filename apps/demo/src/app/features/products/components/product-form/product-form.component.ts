import { IMAGE_PATH_TOKEN } from '#/app/common/assets';
import { SizesService } from '#/app/common/services';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  signal,
  type OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RkSvg } from '@ngx-rask/components';
import { ProductsService } from '../../shared/services';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductsService, SizesService],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    NgClass,
    NgFor,
    NgIf,
    RkSvg,
  ],
})
export default class ProductFormComponent implements OnInit {
  readonly #imagePath = inject(IMAGE_PATH_TOKEN);
  readonly #productsService = inject(ProductsService);

  protected readonly colors = signal(['black', 'blue', 'green', 'pink', 'red', 'white']);
  protected readonly product = this.#productsService.product;
  // protected readonly selectedColor = signal('black');
  // protected readonly hoveredColor = signal('default');

  protected readonly svgPath = computed(() => {
    const name = this.product()?.name.toLocaleLowerCase();
    const path = `${this.#imagePath}/${name}/${name}.svg`;
    return path;
  });

  @Input({ required: true }) accessor productId!: string;

  ngOnInit() {
    this.#productsService.loadProductById(this.productId);
  }

  // protected mouseoverColor(color: string) {
  //   this.hoveredColor.set(color);
  // }

  // protected mouseoutColor() {
  //   this.hoveredColor.set('default');
  // }

  // protected selectColor(color: string) {
  //   this.selectedColor.set(color);
  // }
}
