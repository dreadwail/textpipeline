import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

import ExternalLink from '../../ExternalLink';

export interface FooterLinkProps {
  readonly icon: string;
  readonly text: string;
  readonly href: string;
}

const linkColor = 'textPrimary';

const iconMapping: Record<string, typeof SvgIcon> = {
  twitter: TwitterIcon,
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, text, href }) => {
  const Icon = iconMapping[icon];
  return (
    <ListItem component={ExternalLink} href={href} color={linkColor}>
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

export default FooterLink;
