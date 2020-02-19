import 'jest-enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

beforeEach(() => {
  expect.assertions(1);
});

process.on('unhandledRejection', err => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection:', err);
  throw err;
});
