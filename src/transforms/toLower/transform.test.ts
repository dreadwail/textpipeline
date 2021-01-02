import toLower from './transform';

describe('toLower', () => {
  it('has the correct attributes', () => {
    expect(toLower).toMatchSnapshot();
  });

  describe('execute', () => {
    it('converts empty to empty', () => expect(toLower.execute('')).resolves.toEqual(''));

    it('converts already lower cased text to itself', () =>
      expect(toLower.execute('foo bar')).resolves.toEqual('foo bar'));

    it('converts mixed case to lower case', () => expect(toLower.execute('Foo baR')).resolves.toEqual('foo bar'));

    it('converts upper case to lower case', () => expect(toLower.execute('FOO BAR')).resolves.toEqual('foo bar'));

    it('converts text with non-alpha values correctly', () =>
      expect(toLower.execute('FOO bar 123 $%^&')).resolves.toEqual('foo bar 123 $%^&'));
  });
});
