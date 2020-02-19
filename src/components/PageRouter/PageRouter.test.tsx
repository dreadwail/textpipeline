import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import PageRouter from './PageRouter';

describe('PageRouter', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<PageRouter />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
