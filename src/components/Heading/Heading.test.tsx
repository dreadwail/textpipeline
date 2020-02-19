import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Heading, { HeadingProps } from './Heading';

describe('Heading', () => {
  let rendered: ShallowWrapper;

  describe.each([1, 2, 3, 4, 5, 6] as HeadingProps['level'][])('at level %d', (level: HeadingProps['level']) => {
    beforeEach(() => {
      rendered = shallow(<Heading level={level} />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
