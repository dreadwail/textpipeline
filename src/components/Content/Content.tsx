import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const contentMaxWidth = 1200;

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
      <Box p={3} width="100%" height="100%" maxWidth={contentMaxWidth} mx="auto">
        {children}
      </Box>
    </main>
  );
};

export default Content;
