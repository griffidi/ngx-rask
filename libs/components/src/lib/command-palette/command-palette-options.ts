import { InjectionToken } from '@angular/core';

export interface CommandPaletteItem {
  icon?: string;
  path: string;
  title: string;
}

export interface CommandPaletteOptions {
  items: CommandPaletteItem[];
}

export const COMMAND_PALETTE_OPTIONS = new InjectionToken<CommandPaletteOptions>(
  'RkCommandPaletteOptions'
);
