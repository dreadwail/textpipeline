import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export interface HeaderProps {
  readonly siteName: string;
}

const Header: React.FC<HeaderProps> = ({ siteName }) => (
  <Typography variant="h4" component="h1" noWrap align="center">
    <Link href="/" underline="none">
      {siteName}
    </Link>
  </Typography>
);

export default Header;
