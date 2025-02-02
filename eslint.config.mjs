import { config, configs as tseslintConfig } from 'typescript-eslint';
import { configs as angularConfig, processInlineTemplates } from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';

const { configs: eslintConfig } = eslint;

export default config(
  {
    files: ['**/*.ts'],
    extends: [
      eslintConfig.recommended,
      ...tseslintConfig.recommended,
      ...tseslintConfig.stylistic,
      ...angularConfig.tsRecommended,
      eslintPluginPrettierRecommended,
    ],
    processor: processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angularConfig.templateRecommended, ...angularConfig.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
    },
  }
);
