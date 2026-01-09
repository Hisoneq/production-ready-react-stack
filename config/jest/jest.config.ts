import type { Config } from 'jest';

const config: Config = {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__ : JSON.stringify('jest'),
    },
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: "coverage",
    //   preset: 'ts-jest',

    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],

    coverageProvider: "v8",

    moduleDirectories: ["node_modules", "src"],

    moduleFileExtensions: [
      "js",
      "mjs",
      "cjs",
      "jsx",
      "ts",
      "mts",
      "cts",
      "tsx",
      "json",
      "node"
    ],

    rootDir: '../../',

    testEnvironment: "jsdom",

    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  
    testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],

    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },

    moduleNameMapper: {
      '\\.(scss|less|css)$': 'identity-obj-proxy',
      '\\.svg$': '<rootDir>/config/jest/jestEmptyComponent.tsx',
      '^app/(.*)': '<rootDir>/src/app/$1',
      '^shared/(.*)': '<rootDir>/src/shared/$1',
      '^pages/(.*)': '<rootDir>/src/pages/$1',
      '^widgets/(.*)': '<rootDir>/src/widgets/$1',
      '^features/(.*)': '<rootDir>/src/features/$1',
      '^entities/(.*)': '<rootDir>/src/entities/$1',
    },
};

module.exports = config;
