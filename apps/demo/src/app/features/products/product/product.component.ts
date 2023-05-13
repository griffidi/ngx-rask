import { IMAGE_PATH_TOKEN } from '#/app/common/assets';
import { GetProductByIdDocument, GetSizesDocument, type Product as ProductType, type Size } from '#/app/types/graphql';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  computed,
  inject,
  signal,
  type OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { CreatePathPipe } from '@ngx-rask/core';
import { Client } from '@ngx-rask/graphql';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export default class Product implements OnInit {
  #cdr = inject(ChangeDetectorRef);
  #client = inject(Client);
  #http = inject(HttpClient);
  #sanitizer = inject(DomSanitizer);

  protected readonly colors = signal(['black', 'blue', 'green', 'pink', 'red', 'white']);
  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly product = signal<ProductType>({} as ProductType);
  protected readonly productImageName = computed(() => `${this.product().name}-black-1`);
  protected readonly sizes = signal<Size[]>([]);
  protected svg: SafeHtml | undefined;
  protected readonly selectedColor = signal('black');
  protected readonly hoveredColor = signal('default');
  protected form = new FormBuilder().nonNullable.group({
    name: ['', Validators.required],
  });

  @Input({ required: true }) accessor id!: string;

  async ngOnInit() {
    const { product } = await this.#client.query(GetProductByIdDocument, { id: this.id });
    this.product.set(product as ProductType);
    this.form.patchValue({ name: this.product().name });

    const { sizes } = await this.#client.query(GetSizesDocument);
    this.sizes.set(sizes as Size[]);

    this.#loadImage();
  }

  onSubmit() {
    console.log('Product submitted');
  }

  #loadImage() {
    const { name } = this.product();

    this.#http
      .get(`${this.imagePath}/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.svg`, { responseType: 'text' })
      .pipe(
        tap(svg => {
          this.svg = this.#sanitizer.bypassSecurityTrustHtml(svg);
          this.#cdr.markForCheck();
        })
      )
      .subscribe();
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
