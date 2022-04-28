// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      'tsconfig': './app/tsconfig.json',
    },
  },
  rootDir: './',
  roots: ['<rootDir>/app'],
  moduleNameMapper: {
     '~/(.*)': '<rootDir>/app/$1'
  },
  // modulePaths: ["node_modules", "<rootDir>/app"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
