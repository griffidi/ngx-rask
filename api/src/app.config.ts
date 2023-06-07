import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env?.['NODE_ENV'] ?? 'development'}` });

interface AppConfig {
  corsOrigin: string;
  port: string;
  jwtKey: string;
  jwtSecret: string;
  isDevMode: boolean;
}

export default {
  corsOrigin: process.env?.['CORS_ORIGIN'],
  port: process.env?.['PORT'],
  jwtKey: process.env?.['JWT_KEY'],
  jwtSecret: process.env?.['JWT_SECRET'],
  isDevMode: process.env?.['NODE_ENV'] === 'development',
} satisfies AppConfig;
