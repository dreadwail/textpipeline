import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<ExternalLink href="https://google.com" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
