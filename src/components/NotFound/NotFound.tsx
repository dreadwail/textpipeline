import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NotInterested from '@material-ui/icons/NotInterested';
import InternalLink from 'components/InternalLink';
import React from 'react';

const NotFound: React.FC = () => (
  <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
    <Box my={5} display="flex" alignItems="center">
      <Box mx={1}>
        <NotInterested />
      </Box>
      <Typography variant="h4" component="h2" noWrap align="center">
        Not Found
      </Typography>
    </Box>
    <Typography component="p">That page doesn't seem to exist. It may have been moved or removed.</Typography>
    <InternalLink href="/">Click here to return home</InternalLink>
  </Box>
);

export default NotFound;
