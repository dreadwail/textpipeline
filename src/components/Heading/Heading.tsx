import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  readonly level: HeadingLevel;
  readonly color?: TypographyProps['color'];
  readonly align?: TypographyProps['align'];
}

const Heading: React.FC<HeadingProps> = ({ children, level, align, color = 'secondary' }) => {
  const variant = `h${level}` as TypographyProps['variant'];

  return (
    <Typography variant={variant} color={color} align={align}>
      <strong>{children}</strong>
    </Typography>
  );
};

export default Heading;
