import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Home from './Home';

describe('Home', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Home />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
