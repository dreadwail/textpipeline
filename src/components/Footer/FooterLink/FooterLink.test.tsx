import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import FooterLink from './FooterLink';

describe('FooterLink', () => {
  let rendered: ShallowWrapper;

  describe('with a valid icon', () => {
    beforeEach(() => {
      rendered = shallow(<FooterLink icon="twitter" text="Testing" href="https://example.com/foo" />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('with an invalid icon', () => {
    beforeEach(() => {
      rendered = shallow(<FooterLink icon="boooooooop" text="Testing" href="https://example.com/foo" />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
