import ngplugin from '@angular-eslint/eslint-plugin';
import ngtemplate from '@angular-eslint/eslint-plugin-template';
import ngparser from '@angular-eslint/template-parser';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import eslint from 'eslint';
import prettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierPlugin from 'eslint-plugin-prettier';

const sharedPlugins = {
  ts,
  ngplugin,
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
  ...ngtemplate.rules['process-inline-templates'],
  ...ts.rules['stylistic-type-checked'],
  ...ts.rules['strict-type-checked'],
  ...jsdoc['recommended'],
  ...prettier.rules,
  'ngplugin/no-empty-lifecycle-method': 'error',
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

const sharedAppRules = {
  'ngplugin/directive-selector': [
    'error',
    {
      type: 'attribute',
      prefix: 'app',
      style: 'camelCase',
    },
  ],
  'ngplugin/component-selector': [
    'error',
    {
      type: 'element',
      prefix: 'app',
      style: 'kebab-case',
    },
  ],
};

const sharedLibRules = {
  'ngplugin/directive-selector': [
    'error',
    {
      type: 'attribute',
      prefix: 'rk',
      style: 'camelCase',
    },
  ],
  'ngplugin/component-selector': [
    'error',
    {
      type: 'element',
      prefix: 'rk',
      style: 'kebab-case',
    },
  ],
};

const appConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
    ...sharedAppRules,
  },
};

const libConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
    ...sharedLibRules,
  },
};

export default [
  {
    files: ['apps/*/src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: 'apps/*',
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...appConfig,
  },
  {
    files: ['libs/*/src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: 'libs/*',
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...libConfig,
  },
  {
    files: ['apps/*/src/**/*.html', 'libs/*/src/**/*.html'],
    languageOptions: {
      parser: ngparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: true,
        tsconfigRootDir: '(apps|libs)/*',
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    rules: {
      ...prettier.rules,
      ...ngtemplate.rules['recommended'],
      ...ngtemplate.rules['accessibility'],
    },
  },
];
