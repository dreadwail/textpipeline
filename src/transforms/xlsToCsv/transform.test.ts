import xlsToCsv from './transform';

describe('XLS to CSV', () => {
  it('has the correct attributes', () => {
    expect(xlsToCsv).toMatchSnapshot();
  });

  describe('when called with valid input', () => {
    let output: string;

    beforeEach(async () => {
      output = await xlsToCsv.execute('stuff');
    });

    it('produces the correct output', () => {
      expect(output).toMatchSnapshot();
    });
  });
});
