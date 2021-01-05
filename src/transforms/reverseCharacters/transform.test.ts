import reverseCharacters from './transform';

describe('reverseCharacters', () => {
  it('has the correct attributes', () => {
    expect(reverseCharacters).toMatchSnapshot();
  });

  describe('execute', () => {
    it('converts empty to empty', () => expect(reverseCharacters.execute('')).resolves.toEqual(''));

    it('returns itself if the input is 1 character', () =>
      expect(reverseCharacters.execute('a')).resolves.toEqual('a'));

    it('reverses characters in a string', () => expect(reverseCharacters.execute('abc')).resolves.toEqual('cba'));

    it('reverses characters in a string that has spaces', () =>
      expect(reverseCharacters.execute('abc def')).resolves.toEqual('fed cba'));

    it('reverses characters in a string that has punctuation', () =>
      expect(reverseCharacters.execute('abc, def.')).resolves.toEqual('.fed ,cba'));
  });
});
