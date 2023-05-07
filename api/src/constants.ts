import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env?.['NODE_ENV'] ?? 'development'}` });

export const CORS_ORIGINS = process.env?.['CORS_ORIGIN'];
export const GRAPHQL_PORT = process.env?.['GRAPHQL_PORT'];
export const JWT_KEY = process.env?.['JWT_KEY'];
export const JWT_SECRET = process.env?.['JWT_SECRET'];
export const IS_DEV_MODE: boolean = process.env?.['NODE_ENV'] !== 'production';
