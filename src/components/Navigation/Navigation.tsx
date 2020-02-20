import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import TransformList from '../TransformList';
import NavigationSection from './NavigationSection';

export interface NavigationProps {
  readonly width: number;
}

const useStyles = makeStyles(
  createStyles<'drawer' | 'drawerPaper', NavigationProps>({
    drawer: {
      width: props => props.width,
    },
    drawerPaper: {
      width: props => props.width,
      position: 'static',
      minHeight: '100vh',
    },
  })
);

const Navigation: React.FC<NavigationProps> = ({ width }) => {
  const classes = useStyles({ width });
  return (
    <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent" anchor="left">
      <Header />
      <NavigationSection isPrimary={true}>
        <TransformList />
      </NavigationSection>
      <NavigationSection>
        <Footer />
      </NavigationSection>
    </Drawer>
  );
};

export default Navigation;
