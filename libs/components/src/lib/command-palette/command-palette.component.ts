import { OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rk-command-palette',
  standalone: true,
  templateUrl: './command-palette.component.html',
  styleUrls: ['./command-palette.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OverlayModule],
})
export class CommandPalette {}
