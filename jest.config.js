module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    "ts-jest": {
        isolatedModules: true
    }
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};