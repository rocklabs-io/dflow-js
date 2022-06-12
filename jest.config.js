/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: '<rootDir>/tests/custom-test-env.js',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
  modulePaths: ['<rootDir>/src'],
  coveragePathIgnorePatterns: ['mocks'],
  transformIgnorePatterns: [
    'node_modules/(?!(@dfinity/principal)/)' 
  ],
  globals: {
    extensionsToTreatAsEsm: ['.ts', '.js'],
    'ts-jest': {
      useESM: true
    }
  },
};
