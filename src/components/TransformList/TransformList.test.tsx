import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import TransformList from './TransformList';

describe('TransformList', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<TransformList />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
