import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Head from './Head';

describe('Head', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Head />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
