import { shallow } from 'enzyme';
import React, { ComponentType } from 'react';

import routes, { isKnownPath } from './routes';

jest.mock('./components/Home', () => () => 'test-home-component');
jest.mock('./components/NotFound', () => () => 'test-not-found-component');
jest.mock('./components/OpenSource', () => () => 'test-open-source-component');
jest.mock('./components/OpenSourceProject', () => () => 'test-open-source-project-component');
jest.mock('./components/Transform', () => () => 'test-transform-component');

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
