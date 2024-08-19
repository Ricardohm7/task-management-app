import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@stylistic': stylistic
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        'allowNumber': true
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'react-refresh/only-export-components': 'off'
  }
})
