import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import App from './App';

describe('App', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
