import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Footer as SiteFooter } from '../../types';
import Footer from './Footer';

const footer: SiteFooter = {
  Alpha: [{ icon: 'twitter', text: 'Alpha 1', href: 'https://example.com/alpha-1' }],
  Beta: [{ icon: 'twitter', text: 'Beta 1', href: 'https://example.com/beta-1' }],
};

describe('Footer', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Footer footer={footer} />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
