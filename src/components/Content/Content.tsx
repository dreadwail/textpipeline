import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      width: '100%',
    },
  })
);

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Box p={3} width="100%" height="100%">
        {children}
      </Box>
    </main>
  );
};

export default Content;
