import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

import { buildTransformPath } from '../../routes';
import transforms from '../../transforms';
import ListItemLink from '../ListItemLink';

const TransformList: React.FC = () => (
  <List>
    {Object.keys(transforms).map(slug => {
      const { name } = transforms[slug];
      return <ListItemLink key={slug} icon={EditIcon} text={name} href={buildTransformPath(slug)} />;
    })}
  </List>
);

export default TransformList;
