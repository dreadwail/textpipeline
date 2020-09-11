import Box from '@material-ui/core/Box';
import Heading from 'components/Heading';
import InternalLink from 'components/InternalLink';
import React from 'react';

const Header: React.FC = () => (
  <Box p={2}>
    <Heading level={2} semanticLevel={1} noWrap align="center">
      <InternalLink href="/" underline="none">
        <Box component="span" color="primary.main" display="inline">
          Text
        </Box>
        <Box component="span" color="black" display="inline">
          Pipeline
        </Box>
      </InternalLink>
    </Heading>
  </Box>
);

export default Header;
