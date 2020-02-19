import React from 'react';

import { Footer as SiteFooter } from '../../types';

export interface FooterProps {
  readonly footer: SiteFooter;
}

const Footer: React.FC<FooterProps> = ({ children }) => <footer>{children}</footer>;

export default Footer;
