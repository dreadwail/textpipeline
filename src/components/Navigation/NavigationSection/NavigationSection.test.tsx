import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import NavigationSection from './NavigationSection';

describe('NavigationSection', () => {
  let rendered: ShallowWrapper;

  describe('when isPrimary is not specified', () => {
    beforeEach(() => {
      rendered = shallow(<NavigationSection />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when isPrimary is specified false', () => {
    beforeEach(() => {
      rendered = shallow(<NavigationSection isPrimary={false} />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when isPrimary is specified true', () => {
    beforeEach(() => {
      rendered = shallow(<NavigationSection isPrimary={true} />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
