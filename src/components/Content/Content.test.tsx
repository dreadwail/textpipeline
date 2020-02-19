import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Content from './Content';

describe('Content', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Content>stuff</Content>);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
