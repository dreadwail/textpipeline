import { storiesOf } from '@storybook/react';
import React from 'react';

import ExternalLink from './ExternalLink';

storiesOf('ExternalLink', module).add('default', () => (
  <ExternalLink href="https://google.com">Test Link</ExternalLink>
));
