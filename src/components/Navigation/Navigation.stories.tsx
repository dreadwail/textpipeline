import { storiesOf } from '@storybook/react';
import React from 'react';

import Navigation from './Navigation';

storiesOf('Navigation', module).add('default', () => <Navigation siteName="Test Site" />);
