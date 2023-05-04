import ngplugin from '@angular-eslint/eslint-plugin';
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
  ...ngplugin.rules.recommended,
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

export default /** @type {import("eslint").FlatConfig} */ [
  {
    files: ['apps/demo/src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        // project: '',
        // tsconfigRootDir: fileURLToPath(new URL('./', import.meta.url)),
        tsconfigRootDir: import.meta.url,
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...config,
  },
  {
    files: ['apps/demo/src/**/*.html'],
    languageOptions: {
      parser: '@angular-eslint/template-parser',
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: true,
        // project: '',
        // tsconfigRootDir: fileURLToPath(new URL('./', import.meta.url)),
        tsconfigRootDir: import.meta.url,
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    plugins: {
      ...prettier.rules,
      ...['plugin:@angular-eslint/template/recommended'],
    },
  },
];
