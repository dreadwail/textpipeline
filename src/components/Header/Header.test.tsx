import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Header from './Header';

describe('Header', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Header />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
