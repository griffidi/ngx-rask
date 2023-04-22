import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import eslint from 'eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const sharedPlugins = {
  ts,
  prettierPlugin,
};

const sharedBrowserGlobals = {
  browser: 'writable',
  node: 'readonly',
  es2022: 'writable',
};

const sharedRules = {
  ...eslint['recommended'],
  ...ts.rules['stylistic-type-checked'],
  ...ts.rules['strict-type-checked'],
  ...prettier.rules,
};

const config = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
  },
};

export default [
  {
    files: ['apps/demo/src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        // tsconfigRootDir: fileURLToPath(new URL('./apps/demo', import.meta.url)),
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...config,
  },
];
