import js from '@eslint/js';
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
            'public/**'
        ]
    },
    
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                React: 'readonly',
                __IS_DEV__: 'readonly'
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: {
            react: {
                version: 'detect' // Автоматически берет из package.json
            }
        },
        rules: {
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'only-multiline'],
            'no-trailing-spaces': 'error',
            
            'arrow-parens': ['error', 'always'],
            'arrow-spacing': ['error', { 'before': true, 'after': true }],
            'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
            'curly': ['error', 'all'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            
            // React
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'off',
            'react/display-name': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/require-default-props': 'off',
            
            '@typescript-eslint/no-unused-vars': ['warn', {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            
            'no-unused-vars': 'off',
            'no-undef': 'off'
        }
    },
    
    {
        files: ['config/**/*.ts', 'config/**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_'
            }]
        }
    }
]);