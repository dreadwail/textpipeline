import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import InternalLink from './InternalLink';

describe('InternalLink', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<InternalLink href="/" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
