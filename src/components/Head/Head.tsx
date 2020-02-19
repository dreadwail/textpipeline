import React from 'react';
import { Helmet } from 'react-helmet';

export interface HeadProps {
  readonly description: string;
  readonly siteName: string;
}

const Head: React.FC<HeadProps> = ({ description, siteName }) => (
  <Helmet>
    <title>{siteName}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <meta name="description" content={description} />
  </Helmet>
);

export default Head;
