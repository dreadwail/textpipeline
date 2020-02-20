import csvToXls from './transform';

describe('CSV to XLS', () => {
  it('has the correct attributes', () => {
    expect(csvToXls).toMatchSnapshot();
  });

  describe('when called with valid input', () => {
    let output: string;

    beforeEach(async () => {
      output = await csvToXls.execute('stuff');
    });

    it('produces the correct output', () => {
      expect(output).toMatchSnapshot();
    });
  });
});
