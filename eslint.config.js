import ngplugin from '@angular-eslint/eslint-plugin';
import ngtemplate from '@angular-eslint/eslint-plugin-template';
import ngparser from '@angular-eslint/template-parser';
import rxNg from '@rx-angular/eslint-plugin';
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
  ...ts.rules['recommended'],
  ...ts.rules['recommended-requiring-type-checking'],
  ...jsdoc['recommended'],
  ...prettier.rules,
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

const sharedNgRules = {
  ...ngplugin.rules.recommended,
  ...ngtemplate.rules['process-inline-templates'],
  ...rxNg.rules['zoneless'],
};

const sharedAppRules = {
  ...sharedNgRules,
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
  ...sharedNgRules,
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

const sharedNodeGlobals = {
  browser: 'readonly',
  node: 'writable',
  es2022: 'writable',
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

const nodeConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
  },
};

export default [
  {
    files: ['api/src/**/*.ts', 'api/prisma/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: 'api/*',
      },
      globals: {
        ...sharedNodeGlobals,
      },
    },
    ...nodeConfig,
  },
  {
    files: ['*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.url,
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...appConfig,
  },
  // {
  //   files: ['libs/*/src/**/*.ts'],
  //   languageOptions: {
  //     sourceType: 'module',
  //     ecmaVersion: 2022,
  //     parser,
  //     parserOptions: {
  //       project: true,
  //       tsconfigRootDir: 'libs/*',
  //     },
  //     globals: {
  //       ...sharedBrowserGlobals,
  //     },
  //   },
  //   ...libConfig,
  // },
  {
    files: ['*.html'],
    languageOptions: {
      parser: ngparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.url,
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
