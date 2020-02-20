import Typography from '@material-ui/core/Typography';
import React from 'react';

type TypographyProps = React.ComponentProps<typeof Typography>;

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  readonly level: HeadingLevel;
  readonly semanticLevel?: HeadingLevel;
  readonly color?: TypographyProps['color'];
  readonly align?: TypographyProps['align'];
  readonly noWrap?: TypographyProps['noWrap'];
}

const Heading: React.FC<HeadingProps> = ({ children, level, semanticLevel, align, noWrap, color }) => {
  const variant = `h${level}` as TypographyProps['variant'];
  // https://github.com/mui-org/material-ui/issues/19512
  const component = (semanticLevel ? `h${semanticLevel}` : `h${level}`) as any;

  return (
    <Typography variant={variant} component={component} color={color} align={align} noWrap={noWrap}>
      <strong>{children}</strong>
    </Typography>
  );
};

export default Heading;
