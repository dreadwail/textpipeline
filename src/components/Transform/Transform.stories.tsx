import { storiesOf } from '@storybook/react';
import React from 'react';
import routes from 'routes';
import { testTransform } from 'testing/fixtures';

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
