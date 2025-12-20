jest.mock('../src/utils/random.js', () => ({
    getSecureRandomInt: jest.fn(),
  }));