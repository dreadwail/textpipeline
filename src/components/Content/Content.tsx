import React from 'react';

export interface ContentProps {
  readonly className?: string;
}

const Content: React.FC<ContentProps> = ({ className, children }) => <main className={className}>{children}</main>;

export default Content;
