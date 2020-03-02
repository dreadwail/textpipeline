import Box from '@material-ui/core/Box';
import Content from 'components/Content';
import Navigation from 'components/Navigation';
import PageRouter from 'components/PageRouter';
import React from 'react';

import Head from '../Head';

const drawerWidth = 240;

const Page: React.FC = () => (
  <>
    <Head />
    <Box display="flex">
      <Navigation width={drawerWidth} />
      <Content>
        <PageRouter />
      </Content>
    </Box>
  </>
);

export default Page;
