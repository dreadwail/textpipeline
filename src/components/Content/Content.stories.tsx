import { storiesOf } from '@storybook/react';
import React from 'react';

import Content from './Content';

storiesOf('Content', module).add('default', () => (
  <Content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum at tortor eget eleifend. Praesent
      consequat pretium fermentum. Cras sodales nec orci sed tincidunt. Pellentesque consectetur velit ac ligula
      facilisis, quis dapibus enim pulvinar. Integer aliquet ac tellus eu gravida.
    </p>
  </Content>
));
