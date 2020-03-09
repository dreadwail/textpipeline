import { storiesOf } from '@storybook/react';
import React from 'react';

import { testTransform } from '../../fixtures';
import routes from '../../routes';
import Transform from './Transform';

storiesOf('Transform', module).add('default', () => (
  <Transform
    name={testTransform.name}
    ossHref={`${routes.oss.path}/${testTransform.slug}`}
    inputType={testTransform.inputType}
    outputType={testTransform.outputType}
    defaultOutput={testTransform.defaultOutput}
    execute={testTransform.execute}
  />
));
