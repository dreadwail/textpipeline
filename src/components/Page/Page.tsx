import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Content from 'components/Content';
import Navigation from 'components/Navigation';
import PageRouter from 'components/PageRouter';
import React from 'react';

import { Footer as SiteFooter } from '../../types';
import Footer from '../Footer';
import Head from '../Head';

export interface PageProps {
  readonly siteName: string;
  readonly description: string;
  readonly footer: SiteFooter;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

const Page: React.FC<PageProps> = ({ siteName, description, footer }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head siteName={siteName} description={description} />
      <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent" anchor="left">
        <Navigation siteName={siteName} />
      </Drawer>
      <Content className={classes.content}>
        <PageRouter />
      </Content>
      <Footer footer={footer} />
    </div>
  );
};

export default Page;
