import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Head from './Head';

describe('Head', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Head siteName="Test Site" description="Testing 123 Testing" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
