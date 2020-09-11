import React, { ComponentType } from 'react';
import { render } from 'testing/react';

import { bySlug as ossBySlug } from './oss';
import routes, { isKnownPath } from './routes';
import { bySlug as transformsBySlug } from './transforms';

describe('routes', () => {
  it('has the correct routes', () => {
    expect(routes).toMatchSnapshot();
  });

  it('should render the correct component for the home route', () => {
    const ToRender = routes.home.component as ComponentType;
    const { queryByText } = render(<ToRender />);
    expect(queryByText('Choose a text transform from the menu.')).toBeInTheDocument();
  });

  it('should render the correct component for the OSS route', () => {
    const ToRender = routes.oss.component as ComponentType;
    const { queryByText } = render(<ToRender />);
    expect(queryByText('Open Source Projects')).toBeInTheDocument();
  });

  Object.keys(ossBySlug).forEach(ossSlug => {
    const oss = ossBySlug[ossSlug];
    it(`should render the correct component for the ${oss.slug} OSS route`, () => {
      const ToRender = routes[`oss-${oss.slug}`].component as ComponentType;
      const { queryByText } = render(<ToRender />);
      expect(queryByText(oss.description)).toBeInTheDocument();
    });
  });

  Object.keys(transformsBySlug).forEach(transformSlug => {
    const transform = transformsBySlug[transformSlug];
    it(`should render the correct component for the ${transform.slug} transform route`, () => {
      const ToRender = routes[`transform-${transform.slug}`].component as ComponentType;
      const { queryByText } = render(<ToRender />);
      expect(queryByText(transform.name)).toBeInTheDocument();
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
