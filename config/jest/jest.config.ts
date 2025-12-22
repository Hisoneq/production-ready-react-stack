import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'ts-jest',

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

  moduleNameMapper: {
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};

export default config;
