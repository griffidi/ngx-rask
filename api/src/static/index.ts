import { type File } from 'formidable';
import { type DefaultContext, type DefaultState, type Next, type ParameterizedContext } from 'koa';
import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import config from '../app.config.js';
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
    if (ctx.method === 'GET') {
      const filePath = resolveStaticFileUrl(ctx.url);

      if (existsSync(filePath)) {
        const file = await readFile(filePath, { encoding: 'utf-8' });
        ctx.body = file;
      }
    }

    if (ctx.method === 'POST') {
      const file: File = ctx.request.files?.['file'] as any;

      if (file) {
        try {
          const reader = createReadStream(file.filepath);
          const stream = createWriteStream(`${config.staticPath}/${file.originalFilename}`);
          reader.pipe(stream);
          console.log(`Uploading ${file.filepath} to ${stream.path}`);
          ctx.status = 201;
          ctx.body = null;
          ctx.redirect('/');
          return;
        } catch (ex) {
          console.error(ex);
        }
      }
    }
  }

  await next();
};
