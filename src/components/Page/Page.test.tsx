import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Footer } from '../../types';
import Page from './Page';

describe('Page', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    const footer: Footer = {
      'Test Section 1': [{ icon: 'twitter', text: 'Alpha 1', href: 'https://example.com/alpha-1' }],
      'Test Section 2': [{ icon: 'twitter', text: 'Beta 1', href: 'https://example.com/beta-1' }],
    };

    rendered = shallow(<Page siteName="Test Site" description="Testing 123 Testing" footer={footer} />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
