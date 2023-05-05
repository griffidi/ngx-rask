import ngplugin from '@angular-eslint/eslint-plugin';
import ngparser from '@angular-eslint/template-parser';
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
  '@angular-eslint/no-empty-lifecycle-method': 'error',
  'ts/ban-types': 'warn',
  'ts/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  'ts/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
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
      parser: ngparser,
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
    rules: {
      ...prettier.rules,
      ...ngplugin.rules['template'],
    },
  },
];
