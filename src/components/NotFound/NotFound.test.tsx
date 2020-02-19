import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import NotFound from './NotFound';

describe('NotFound', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<NotFound />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
