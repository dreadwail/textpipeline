import { storiesOf } from '@storybook/react';
import React from 'react';

import InternalLink from './InternalLink';

storiesOf('InternalLink', module).add('default', () => <InternalLink to="/">Test Link</InternalLink>);
