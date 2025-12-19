export default {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src//*.js',
      '!/node_modules/',
    ],
    moduleFileExtensions: ['js', 'json'],
    testMatch: ['/tests/**/*.test.js'],
    transform: {}
  };