import greetUser from '../src/cli.js';

const main = async () => {
  try {
    await greetUser();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

main();
