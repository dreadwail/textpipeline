import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import ListItemLink from 'components/ListItemLink';
import React from 'react';
import { Transform } from 'transforms';

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
