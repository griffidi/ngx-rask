import { IMAGE_PATH_TOKEN } from '#/app/common/*';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { Colors, RkColorOptions, RkSvg } from '@ngx-rask/components';

type hoveredColorType = `hovered-color-${Colors}`;
type selectedColorType = `selected-color-${Colors}`;

@Component({
  selector: 'app-product-images',
  standalone: true,
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, RkColorOptions, RkSvg],
})
export class ProductImagesComponent {
  readonly #imagePath = inject(IMAGE_PATH_TOKEN);

  protected readonly hoveredColor = signal<hoveredColorType | null>(null);
  protected readonly selectedColor = signal<selectedColorType>(`selected-color-${Colors.Black}`);
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

  protected onHoverColorChange(color: Colors | null) {
    this.hoveredColor.set(color ? `hovered-color-${color}` : null);
  }

  protected onSelectColorChange(color: Colors) {
    this.selectedColor.set(`selected-color-${color}`);
  }
}
