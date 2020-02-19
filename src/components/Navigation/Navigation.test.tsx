import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Navigation', () => {
  let rendered: ReturnType<typeof mount>;

  describe('when visited from a known path', () => {
    beforeEach(() => {
      rendered = mount(
        <MemoryRouter initialEntries={[{ pathname: '/', key: 'test' }]}>
          <Navigation siteName="Test Site" />
        </MemoryRouter>
      );
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when visited from an unknown path', () => {
    beforeEach(() => {
      rendered = mount(
        <MemoryRouter initialEntries={[{ pathname: '/fnarglefloof', key: 'test' }]}>
          <Navigation siteName="Test Site" />
        </MemoryRouter>
      );
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
