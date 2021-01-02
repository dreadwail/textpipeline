import toUpper from './transform';

describe('toUpper', () => {
  it('has the correct attributes', () => {
    expect(toUpper).toMatchSnapshot();
  });

  describe('execute', () => {
    it('converts empty to empty', () => expect(toUpper.execute('')).resolves.toEqual(''));

    it('converts already upper cased text to itself', () =>
      expect(toUpper.execute('FOO BAR')).resolves.toEqual('FOO BAR'));

    it('converts mixed case to upper case', () => expect(toUpper.execute('Foo baR')).resolves.toEqual('FOO BAR'));

    it('converts lower case to upper case', () => expect(toUpper.execute('foo bar')).resolves.toEqual('FOO BAR'));

    it('converts text with non-alpha values correctly', () =>
      expect(toUpper.execute('foo bar 123 $%^&')).resolves.toEqual('FOO BAR 123 $%^&'));
  });
});
