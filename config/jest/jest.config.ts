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

  moduleDirectories: [
    "node_modules"
  ],

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

  testMatch: [
     '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
};

export default config;
