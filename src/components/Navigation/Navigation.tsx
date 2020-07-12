import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TransformList from 'components/TransformList';
import React from 'react';
import { transformsPath } from 'routes';
import { bySlug } from 'transforms';

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
  const transforms = Object.keys(bySlug).map(slug => bySlug[slug]);
  return (
    <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent" anchor="left">
      <Header />
      <NavigationSection isPrimary={true}>
        <TransformList transforms={transforms} transformsPath={transformsPath} />
      </NavigationSection>
      <NavigationSection>
        <Footer />
      </NavigationSection>
    </Drawer>
  );
};

export default Navigation;
