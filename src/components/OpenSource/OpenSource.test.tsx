import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import OpenSource from './OpenSource';

describe('OpenSource', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<OpenSource ossPath="/oss" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
