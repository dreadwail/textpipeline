import Link, { LinkProps } from '@material-ui/core/Link';
import React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

// https://github.com/ReactTraining/react-router/issues/6056
/* istanbul ignore next */
const ReactRouterInternalLink = React.forwardRef<HTMLAnchorElement, ReactRouterLinkProps>((props, ref) => (
  <ReactRouterLink innerRef={ref} {...props} />
));

export interface InternalLinkProps {
  readonly href: string;
  readonly className?: string;
  readonly color?: LinkProps['color'];
  readonly underline?: LinkProps['underline'];
}

const InternalLink: React.FC<InternalLinkProps> = React.forwardRef<any, InternalLinkProps>(
  ({ href, children, className, color, underline }, ref) => (
    <Link
      component={ReactRouterInternalLink}
      to={href}
      className={className}
      ref={ref}
      color={color}
      underline={underline}
    >
      {children}
    </Link>
  )
);

export default InternalLink;
