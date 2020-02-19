import { storiesOf } from '@storybook/react';
import React from 'react';

import { footer } from '../../config';
import Footer from './Footer';

storiesOf('Footer', module).add('default', () => <Footer footer={footer} />);
