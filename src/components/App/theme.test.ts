import { theme } from './theme';

describe('theme', () => {
  it('has the correct options', () => {
    expect(theme).toMatchSnapshot();
  });
});
