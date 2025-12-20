export default {
  testMatch: ["**/__tests__/**/*.js"],
  coveragePathIgnorePatterns: [
    '/bin/',           // CLI-скрипты
    '/node_modules/',
    '/coverage/',
    '/__tests__/',
    'jest.config.js',
    'babel.config.js',
  ],
};
