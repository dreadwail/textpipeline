import Link from '@material-ui/core/Link';
import React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

// https://github.com/ReactTraining/react-router/issues/6056
/* istanbul ignore next */
const ReactRouterInternalLink = React.forwardRef<HTMLAnchorElement, ReactRouterLinkProps>((props, ref) => (
  <ReactRouterLink innerRef={ref} {...props} />
));

export interface InternalLinkProps {
  readonly to: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({ to, children }) => (
  <Link component={ReactRouterInternalLink} to={to}>
    {children}
  </Link>
);

export default InternalLink;
