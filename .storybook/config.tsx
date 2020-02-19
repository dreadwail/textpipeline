import { configure, addDecorator } from '@storybook/react';
import App from '../src/components/App';
import React from 'react';

const AppDecorator = storyFn => <App>{storyFn()}</App>;
addDecorator(AppDecorator);

configure(require.context('../src', true, /\.stories\.[jt]s[x]?$/), module);
