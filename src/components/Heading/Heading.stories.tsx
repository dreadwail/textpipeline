import { storiesOf } from '@storybook/react';
import React from 'react';

import Heading, { HeadingProps } from './Heading';

const levels: HeadingProps['level'][] = [1, 2, 3, 4, 5, 6];
const semanticLevels: HeadingProps['semanticLevel'][] = [1, 2, 3, 4, 5, 6];

storiesOf('Heading', module).add('default', () => (
  <>
    {levels.map(level => (
      <Heading key={level} level={level}>
        Heading Level {level}
      </Heading>
    ))}
    {levels.map(level => (
      <>
        {semanticLevels.map(semanticLevel => (
          <Heading key={`${level}-${semanticLevel}`} level={level} semanticLevel={semanticLevel}>
            Heading Level {level} - Semantic Level {semanticLevel}
          </Heading>
        ))}
      </>
    ))}
  </>
));
