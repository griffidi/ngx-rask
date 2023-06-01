/**
 * #Bad:
 *
 * Zone-flags configuration inline
 */
// (window as any).__Zone_disable_timers = true;

/**
 * #Good:
 *
 * Zone-flags configuration over import
 */
import '@ngx-rask/core/zone/flags/zone-flags';

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
// import 'zone.js/dist/zone'; // Included with Angular CLI.
