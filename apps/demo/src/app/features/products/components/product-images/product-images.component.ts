import { IMAGE_PATH_TOKEN } from '#/app/common/*';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RkSvg } from '@ngx-rask/components';

@Component({
  selector: 'app-product-images',
  standalone: true,
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RkSvg],
})
export class ProductImagesComponent {
  readonly #imagePath = inject(IMAGE_PATH_TOKEN);

  protected svgPath = '';

  @Input({ required: true })
  set productName(value: string) {
    const name = value.toLocaleLowerCase();
    let path = '';

    if (name) {
      path = `${this.#imagePath}/${name}/${name}.svg`;
    }

    this.svgPath = path;
  }
}
