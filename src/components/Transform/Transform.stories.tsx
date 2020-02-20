import { storiesOf } from '@storybook/react';
import React from 'react';

import Transform from './Transform';

const execute = (input: string) => Promise.resolve(`${input} - transformed to a Bar!`);

storiesOf('Transform', module).add('default', () => (
  <Transform name="Foo to Bar" ossHref="#" inputType="FOO" outputType="BAR" execute={execute} />
));
