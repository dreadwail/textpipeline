import { storiesOf } from '@storybook/react';
import React from 'react';

import { bySlug } from '../../transforms';
import TransformList from './TransformList';

storiesOf('TransformList', module).add('default', () => {
  const transforms = Object.keys(bySlug).map(slug => bySlug[slug]);
  return <TransformList transforms={transforms} transformsPath="/transforms" />;
});
