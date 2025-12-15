import greetUser from '../src/cli.js';

greetUser().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});