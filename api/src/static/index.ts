import { type DefaultContext, type DefaultState, type Next, type ParameterizedContext } from 'koa';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { isStaticUrl, resolveStaticFileUrl } from '../utils/static-utils.js';

/**
 * Static middleware to handle serving static files.
 *
 * @param {ParameterizedContext<DefaultState, DefaultContext, unknown>} ctx Koa context.
 * @param {Next} next Koa next function.
 */
export const staticMiddlewares = async (
  ctx: ParameterizedContext<DefaultState, DefaultContext, unknown>,
  next: Next
) => {
  if (isStaticUrl(ctx.url)) {
    const filePath = resolveStaticFileUrl(ctx.url);

    if (existsSync(filePath)) {
      const file = await readFile(filePath, { encoding: 'utf-8' });
      ctx.body = file;
    }

    return;
  }

  await next();
};
