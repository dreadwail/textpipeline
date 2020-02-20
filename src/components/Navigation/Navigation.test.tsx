import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Navigation, { NavigationProps } from './Navigation';

describe('Navigation', () => {
  let rendered: ShallowWrapper<NavigationProps>;

  beforeEach(() => {
    rendered = shallow(<Navigation width={240} />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
