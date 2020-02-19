import routes, { isKnownPath } from './routes';

describe('routes', () => {
  describe('routes', () => {
    it('has the correct routes', () => {
      expect(routes).toMatchSnapshot();
    });
  });

  describe('isKnownPath', () => {
    it('returns true for a known path', () => {
      expect(isKnownPath('/')).toBe(true);
    });

    it('returns false for an unknown path', () => {
      expect(isKnownPath('/barglesnarf')).toBe(false);
    });
  });
});
