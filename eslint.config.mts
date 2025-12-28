import js from '@eslint/js';
import i18next from 'eslint-plugin-i18next';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '**/*.config.js',
            '**/*.config.ts',
            '**/*.d.ts',
            '**/webpack/**',
            'public/**',
            'coverage/**',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            i18next: i18next,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                React: 'readonly',
                __IS_DEV__: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'i18next/no-literal-string': 'error',

            indent: 'off',
            'linebreak-style': 'off',
            quotes: 'off',
            semi: 'off',
            'comma-dangle': 'off',
            'no-trailing-spaces': 'off',

            'arrow-parens': ['error', 'always'],
            'arrow-spacing': ['error', { before: true, after: true }],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            curly: ['error', 'all'],
            'object-curly-spacing': 'off',
            'array-bracket-spacing': 'off',

            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'off',
            'react/display-name': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/require-default-props': 'off',

            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',

            'no-unused-vars': 'off',
            'no-undef': 'off',
        },
    },

    {
        files: ['**/*.stories.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off', // ← Выключаем только это правило
        },
    },

    {
        files: ['config/**/*.ts', 'config/**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },

    eslintPluginPrettierRecommended,
]);
