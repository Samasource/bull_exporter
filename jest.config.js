module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  testPathIgnorePatterns: [
    '<rootDir>/(dist|node_modules)/',
    '[.]js$',
    '[.]util[.][jt]s$',
    '[.]d[.][jt]s$',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.util.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '__tests__/tsconfig.json' }],
  },
};
