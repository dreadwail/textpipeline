import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExternalLink from 'components/ExternalLink';
import InternalLink from 'components/InternalLink';
import React from 'react';

export interface ListItemLinkProps {
  readonly text: string;
  readonly href: string;
  readonly icon?: typeof SvgIcon;
  readonly isExternal?: boolean;
  readonly subtitle?: string;
}

const linkColor = 'textPrimary';

const ListItemLink: React.FC<ListItemLinkProps> = ({ icon, text, href, isExternal, subtitle }) => {
  const Icon = icon || ArrowRightIcon;
  const LinkComponent = isExternal ? ExternalLink : InternalLink;
  const inset = !Icon;

  return (
    <ListItem button component={LinkComponent} href={href} color={linkColor}>
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText inset={inset} primary={text} secondary={subtitle} />
    </ListItem>
  );
};

export default ListItemLink;
