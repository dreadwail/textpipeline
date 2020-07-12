import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  expect.assertions(1);
});

process.on('unhandledRejection', err => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection:', err);
  throw err;
});
