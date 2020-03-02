import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import React from 'react';

export interface NavigationSectionProps {
  readonly isPrimary?: boolean;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ children, isPrimary }) => (
  <Box flexGrow={isPrimary ? 1 : 0}>
    <Divider />
    {children}
  </Box>
);

export default NavigationSection;
