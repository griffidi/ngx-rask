import { InjectionToken } from '@angular/core';
import type { Route } from '@angular/router';

export interface CommandPaletteItem {
  cssColorCustomProperty?: string;
  icon?: string;
  /**
   * Since most command items are searchable, the default is searchable.
   */
  notSearchable?: boolean;
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
  offsetY: number;
}

/**
 * Command palette options injection token.
 */
export const COMMAND_PALETTE_OPTIONS = new InjectionToken<CommandPaletteOptions>(
  'RkCommandPaletteOptions'
);
