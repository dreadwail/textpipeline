import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { testTransform } from '../../fixtures';
import TransformList from './TransformList';

describe('TransformList', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<TransformList transforms={[testTransform]} transformsPath="/transforms" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
