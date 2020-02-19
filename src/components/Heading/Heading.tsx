import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  readonly level: HeadingLevel;
  readonly color?: TypographyProps['color'];
  readonly align?: TypographyProps['align'];
}

const levelToVisualLevel: Record<HeadingLevel, TypographyProps['variant']> = {
  1: 'h4',
  2: 'h5',
  3: 'h6',
  4: 'subtitle1',
  5: 'body2',
  6: 'body2',
};

const levelToSemanticLevel: Record<HeadingLevel, TypographyProps['component']> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

const Heading: React.FC<HeadingProps> = ({ children, level, align, color = 'secondary' }) => {
  const component = levelToSemanticLevel[level];
  const variant = levelToVisualLevel[level];

  return (
    <Typography variant={variant} component={component} color={color} align={align}>
      <strong>{children}</strong>
    </Typography>
  );
};

export default Heading;
