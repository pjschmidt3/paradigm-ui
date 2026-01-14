import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintStorybook from 'eslint-plugin-storybook'
import globalConfig from '@paradigmui/eslint-config-global'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(js.configs.recommended, {
  extends: Array.isArray(globalConfig) ? globalConfig : [
    globalConfig,
    "plugin:storybook/recommended"
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    '@typescript-eslint': tseslint,
  },
  // Ignore patterns
  ignores: globalIgnores([
    'node_modules/',
    'dist/',
    'build/**',
    'storybook-static/',
    '*.config.js',
    '*.config.ts',
    'coverage/',
    '.storybook/'
  ])
})
