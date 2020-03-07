import bin2dec from './transform';

describe('bin2dec', () => {
  it('has the correct attributes', () => {
    expect(bin2dec).toMatchSnapshot();
  });

  describe('execute', () => {
    it('rejects with a no-input error when supplied undefined', () =>
      expect(bin2dec.execute(undefined as any)).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied empty', () =>
      expect(bin2dec.execute('')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied only whitespace', () =>
      expect(bin2dec.execute(' ')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with an invalid-input error when supplied alpha characters', () =>
      expect(bin2dec.execute('a')).rejects.toEqual(new Error('Invalid binary input.')));

    it('rejects with an invalid-input error when supplied non-binary numeric characters', () =>
      expect(bin2dec.execute('2')).rejects.toEqual(new Error('Invalid binary input.')));

    it('resolves to the correct decimal representation when supplied a binary number', () =>
      expect(bin2dec.execute('0111')).resolves.toEqual('7'));

    it('resolves to the correct decimal representation when supplied binary with whitespace in front', () =>
      expect(bin2dec.execute(' 0111')).resolves.toEqual('7'));

    it('resolves to the correct decimal representation when supplied binary with whitespace in back', () =>
      expect(bin2dec.execute('0111 ')).resolves.toEqual('7'));

    it('resolves to the correct decimal representation when supplied a binary number with spaces', () =>
      expect(bin2dec.execute('01 11')).resolves.toEqual('7'));
  });
});
