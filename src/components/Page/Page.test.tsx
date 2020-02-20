import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Page from './Page';

describe('Page', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Page />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
