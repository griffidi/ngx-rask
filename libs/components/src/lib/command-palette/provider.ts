import { makeEnvironmentProviders, type EnvironmentProviders } from '@angular/core';
import { COMMAND_PALETTE_OPTIONS, type CommandPaletteOptions } from './command-palette-options';
import { CommandPaletteService } from './command-palette.service';

export function provideCommandPalette(options: CommandPaletteOptions): EnvironmentProviders {
  const providers = [
    {
      provide: COMMAND_PALETTE_OPTIONS,
      useValue: options,
    },
    {
      provide: CommandPaletteService,
      useClass: CommandPaletteService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
