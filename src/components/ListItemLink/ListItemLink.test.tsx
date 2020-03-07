import TwitterIcon from '@material-ui/icons/Twitter';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import ListItemLink from './ListItemLink';

describe('ListItemLink', () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<ListItemLink text="Testing" href="https://example.com/foo" />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  describe('with an icon specified', () => {
    beforeEach(() => {
      rendered = shallow(<ListItemLink icon={TwitterIcon} text="Testing" href="https://example.com/foo" />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('with isExternal specified true', () => {
    beforeEach(() => {
      rendered = shallow(<ListItemLink text="Testing" href="https://example.com/foo" isExternal={true} />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('with a subtitle specified', () => {
    beforeEach(() => {
      rendered = shallow(<ListItemLink text="Testing" subtitle="Testing Subtitle" href="https://example.com/foo" />);
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
