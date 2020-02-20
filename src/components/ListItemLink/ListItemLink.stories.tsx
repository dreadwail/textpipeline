import List from '@material-ui/core/List';
import TwitterIcon from '@material-ui/icons/Twitter';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ListItemLink from './ListItemLink';

storiesOf('ListItemLink', module).add('default', () => (
  <List>
    <ListItemLink text="link 1" href="#" />
    <ListItemLink text="link 2" href="#" />
    <ListItemLink text="external link 1" href="https://google.com" isExternal={true} />
    <ListItemLink text="external link 2" href="https://bbc.com" isExternal={true} />
    <ListItemLink text="link with icon" href="#" icon={TwitterIcon} />
  </List>
));
