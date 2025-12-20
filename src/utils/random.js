/* eslint-disable-next-line */
jest.mock('../src/utils/random.js', () => ({
    getSecureRandomInt: jest.fn(),
  }));