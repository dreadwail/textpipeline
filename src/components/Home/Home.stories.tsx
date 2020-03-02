import Box from '@material-ui/core/Box';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Home from './Home';

storiesOf('Home', module).add('default', () => (
  <Box height="50vh">
    <Home />
  </Box>
));
