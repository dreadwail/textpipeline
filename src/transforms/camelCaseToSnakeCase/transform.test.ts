import camelCaseToSnakeCase from './transform';

describe('camelCaseToSnakeCase', () => {
  it('has the correct attributes', () => {
    expect(camelCaseToSnakeCase).toMatchSnapshot();
  });

  describe('execute', () => {
    it('rejects with a no-input error when supplied an empty string', () =>
      expect(camelCaseToSnakeCase.execute('')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied a string containing only spaces', () =>
      expect(camelCaseToSnakeCase.execute(' ')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied a string containing only tabs', () =>
      expect(camelCaseToSnakeCase.execute('\t')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied a string containing only newlines', () =>
      expect(camelCaseToSnakeCase.execute('\n')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied a string containing only whitespace', () =>
      expect(camelCaseToSnakeCase.execute('\n \t')).rejects.toEqual(new Error('No input detected.')));

    it('returns the original string when given a non-camelCase string', () =>
      expect(camelCaseToSnakeCase.execute('foo')).resolves.toEqual('foo'));

    it('converts a single camelCase word to snake_case', () =>
      expect(camelCaseToSnakeCase.execute('fooBar')).resolves.toEqual('foo_bar'));

    it('converts multiple camelCase words to snake_case', () =>
      expect(camelCaseToSnakeCase.execute('fooBar bazBuz')).resolves.toEqual('foo_bar baz_buz'));

    it('converts camelCase words to snake_case while upholding the original whitespace', () =>
      expect(camelCaseToSnakeCase.execute('fooBar\t \nbazBuz')).resolves.toEqual('foo_bar\t \nbaz_buz'));
  });
});
