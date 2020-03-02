import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Footer from './Footer';

describe('Footer', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Footer />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
