import path from 'node:path';
import config from '../app.config.js';

/**
 * Resolve static file URL to absolute path.
 *
 * @param {string} url File url.
 * @returns {string} Absolute file path.
 */
export function resolveStaticFileUrl(url: string) {
  return path.join(config.staticPath, url.replace(`${config.staticRelativePath}`, ''));
}

/**
 * Is static URL.
 *
 * @param {string} url File url.
 * @returns {boolean} True if static URL.
 */
export function isStaticUrl(url: string) {
  return url.startsWith(config.staticRelativePath);
}
