import Link, { LinkProps } from '@material-ui/core/Link';
import React from 'react';

export interface ExternalLinkProps {
  readonly href: string;
  readonly className?: string;
  readonly color?: LinkProps['color'];
}

const ExternalLink: React.FC<ExternalLinkProps> = React.forwardRef<any, ExternalLinkProps>(
  ({ href, children, className, color }, ref) => (
    <Link href={href} rel="noreferrer" target="_blank" className={className} ref={ref} color={color}>
      {children}
    </Link>
  )
);

export default ExternalLink;
