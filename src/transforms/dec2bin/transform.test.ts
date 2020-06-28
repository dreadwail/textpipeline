import dec2bin from './transform';

describe('dec2bin', () => {
  it('has the correct attributes', () => {
    expect(dec2bin).toMatchSnapshot();
  });

  describe('execute', () => {
    it('rejects with a no-input error when supplied undefined', () =>
      expect(dec2bin.execute(undefined as any)).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied empty', () =>
      expect(dec2bin.execute('')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with a no-input error when supplied only whitespace', () =>
      expect(dec2bin.execute(' ')).rejects.toEqual(new Error('No input detected.')));

    it('rejects with an invalid-input error when supplied alpha characters', () =>
      expect(dec2bin.execute('a')).rejects.toEqual(new Error('Invalid decimal input.')));

    it('resolves to the correct binary representation when supplied an integer', () =>
      expect(dec2bin.execute('7')).resolves.toEqual('111'));

    it('resolves to the correct binary representation when supplied a floating point number', () =>
      expect(dec2bin.execute('4.2')).resolves.toEqual('100.0011001100110011'));

    it('resolves to the correct binary representation when supplied decimal with whitespace in front', () =>
      expect(dec2bin.execute(' 7')).resolves.toEqual('111'));

    it('resolves to the correct binary representation when supplied decimal with whitespace in back', () =>
      expect(dec2bin.execute('7 ')).resolves.toEqual('111'));

    it('resolves to the correct binary representation when supplied a decimal number with spaces', () =>
      expect(dec2bin.execute('4 2')).resolves.toEqual('101010'));
  });
});
