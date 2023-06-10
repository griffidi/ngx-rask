import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <span class="page-title">Home Page</span>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-content: center;
        block-size: 100%;
      }

      .page-title {
        font-size: 4rem;
        line-height: 4;
        background-image: linear-gradient(
          to right,
          var(--app-color-purple),
          var(--app-color-green)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {}
