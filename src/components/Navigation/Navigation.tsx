import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

import Heading from '../Heading';

export interface NavigationProps {
  readonly siteName: string;
}

const Navigation: React.FC<NavigationProps> = ({ siteName }) => (
  <>
    <Box p={2}>
      <Heading level={1} align="center">
        {siteName}
      </Heading>
    </Box>
    <Divider />
    <List>
      {['CSV to XLS', 'XML to JSON', 'Typescript to Javascript', 'SCSS to CSS'].map(text => (
        <ListItem button key={text}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </>
);

export default Navigation;
