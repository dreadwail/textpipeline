import { shallow } from 'enzyme';
import React, { ComponentType } from 'react';

import routes, { isKnownPath } from './routes';

describe('routes', () => {
  it('has the correct routes', () => {
    expect(routes).toMatchSnapshot();
  });

  Object.keys(routes).forEach(key => {
    it(`can render route: ${key}`, () => {
      const ToRender = routes[key].component as ComponentType;
      const rendered = shallow(<ToRender />);
      expect(rendered).toMatchSnapshot();
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
