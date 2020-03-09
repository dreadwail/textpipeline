import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

import { Transform } from '../../transforms';
import ListItemLink from '../ListItemLink';

export interface TransformListProps {
  readonly transforms: Transform[];
  readonly transformsPath: string;
}

const TransformList: React.FC<TransformListProps> = ({ transforms, transformsPath }) => (
  <List>
    {transforms.map(({ slug, name }) => (
      <ListItemLink key={slug} icon={EditIcon} text={name} href={`${transformsPath}/${slug}`} />
    ))}
  </List>
);

export default TransformList;
