import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import { fileURLToPath, URL } from 'node:url';

const ROOT_DIR = fileURLToPath(new URL('./', import.meta.url));

const sharedPlugins = {
  ts,
  prettierPlugin,
};

const config = {
  plugins: {
    ...sharedPlugins,
  },
  // rules: {
  //   ...sharedRules,
  // },
};

const sharedBrowserGlobals = {
  browser: 'writable',
  node: 'readonly',
  es2022: 'writable',
};

export default [
  {
    files: ['apps/*/src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: ['./tsconfig.eslint.json', './apps/*/tsconfig.json'],
        tsconfigRootDir: ROOT_DIR,
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
  },
  ...config,
];
