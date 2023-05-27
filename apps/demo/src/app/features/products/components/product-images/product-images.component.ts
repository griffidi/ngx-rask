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
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host ::ng-deep rk-svg {
        --_svg-color: var(--app-color-clothing-black);

        inline-size: 100%;

        & svg {
          block-size: 250px;
          color: var(--_svg-color);
        }

        &.selected-color-black {
          --_svg-color: var(--app-color-clothing-black);
        }

        &.selected-color-blue {
          --_svg-color: var(--app-color-clothing-blue);
        }

        &.selected-color-green {
          --_svg-color: var(--app-color-clothing-green);
        }

        &.selected-color-pink {
          --_svg-color: var(--app-color-clothing-pink);
        }

        &.selected-color-red {
          --_svg-color: var(--app-color-clothing-red);
        }

        &.selected-color-white {
          --_svg-color: var(--app-color-clothing-white);
        }

        /*
          because ::ng-deep is needed to pierce rk-svg, the
          hovered selectors must be listed after the selected
          selectors in order to override theme.
        */
        &.hovered-color-black {
          --_svg-color: var(--app-color-clothing-black);
        }

        &.hovered-color-blue {
          --_svg-color: var(--app-color-clothing-blue);
        }

        &.hovered-color-green {
          --_svg-color: var(--app-color-clothing-green);
        }

        &.hovered-color-pink {
          --_svg-color: var(--app-color-clothing-pink);
        }

        &.hovered-color-red {
          --_svg-color: var(--app-color-clothing-red);
        }

        &.hovered-color-white {
          --_svg-color: var(--app-color-clothing-white);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, RkColorOptions, RkSvg],
})
export class ProductImagesComponent {
  readonly #imagePath = inject(IMAGE_PATH_TOKEN);

  protected readonly hoveredColor = signal<hoveredColorType | ''>('');
  protected readonly selectedColor = signal<selectedColorType>(`selected-color-${Colors.black}`);
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
    this.hoveredColor.set(color ? `hovered-color-${color}` : '');
  }

  protected onSelectColorChange(color: Colors) {
    this.selectedColor.set(`selected-color-${color}`);
  }
}
