import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RepeatIcon from '@material-ui/icons/Repeat';
import Heading from 'components/Heading';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      fontSize: 150,
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading level={1} semanticLevel={2}>
        What text do you want to transform?
      </Heading>

      <Typography variant="subtitle1">Choose a text transform from the menu.</Typography>

      <RepeatIcon className={classes.icon} />
    </Box>
  );
};

export default Home;
