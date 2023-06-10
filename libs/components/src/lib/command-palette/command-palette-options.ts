import { InjectionToken } from '@angular/core';
import type { Route } from '@angular/router';

export interface CommandPaletteItem {
  cssColorCustomProperty?: string;
  icon?: string;
  path: string;
  title: string;
}

export interface CommandPaletteSearchOption {
  header: string;
  items: CommandPaletteItem[];
}

/**
 * Command palette options.
 */
export interface CommandPaletteOptions {
  routes: Route[];
  searchOptions?: CommandPaletteSearchOption[];
}

/**
 * Command palette options injection token.
 */
export const COMMAND_PALETTE_OPTIONS = new InjectionToken<CommandPaletteOptions>(
  'RkCommandPaletteOptions'
);
