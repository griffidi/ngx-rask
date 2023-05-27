import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { RkUnpatch } from 'libs/core/src/lib/unpatch';
import { Colors } from './colors';

@Component({
  selector: 'rk-color-options',
  standalone: true,
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgFor, RkUnpatch],
})
export class RkColorOptions {
  protected readonly colors = signal(Object.keys(Colors));
  protected readonly selectedColor = signal(Colors.Black);
  protected readonly hoveredColor = signal<Colors | null>(null);

  @Output() selectedColorChange = new EventEmitter<Colors>();
  @Output() hoveredColorChange = new EventEmitter<Colors | null>();

  protected mouseoverColor(color: string) {
    this.hoveredColor.set(Colors[color as keyof typeof Colors]);
    this.hoveredColorChange.emit(Colors[color as keyof typeof Colors]);
  }

  protected mouseoutColor() {
    this.hoveredColor.set(null);
    this.hoveredColorChange.emit(null);
  }

  protected selectColor(color: string) {
    this.selectedColor.set(Colors[color as keyof typeof Colors]);
    this.selectedColorChange.emit(Colors[color as keyof typeof Colors]);
  }
}
