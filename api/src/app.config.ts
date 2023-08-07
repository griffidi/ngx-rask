import dotenv from 'dotenv';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config({ path: `.env.${process.env?.['NODE_ENV'] ?? 'development'}` });

interface AppConfig {
  corsOrigin: string;
  port: string;
  jwtKey: string;
  jwtSecret: string;
  isDevMode: boolean;
  staticPath: string;
  staticUrl: URL;
  staticRelativePath: string;
}

export default {
  corsOrigin: process.env['CORS_ORIGIN']!,
  port: process.env['PORT']!,
  jwtKey: process.env['JWT_KEY']!,
  jwtSecret: process.env['JWT_SECRET']!,
  isDevMode: process.env['NODE_ENV'] === 'development',
  staticPath: resolve(fileURLToPath(import.meta.url), '../../public'),
  staticUrl: new URL('../../public', import.meta.url),
  staticRelativePath: '/public',
} satisfies AppConfig;
