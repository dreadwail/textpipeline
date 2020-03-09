import Box from '@material-ui/core/Box';
import { storiesOf } from '@storybook/react';
import React from 'react';

import OpenSource from './OpenSource';

storiesOf('OpenSource', module).add('default', () => (
  <Box maxWidth={1000}>
    <OpenSource ossPath="/oss" />
  </Box>
));
