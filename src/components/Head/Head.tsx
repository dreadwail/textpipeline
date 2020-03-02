import React from 'react';
import { Helmet } from 'react-helmet';

const siteName = 'Text Pipeline';
const description = '';

const Head: React.FC = () => (
  <Helmet>
    <title>{siteName}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <meta name="description" content={description} />
  </Helmet>
);

export default Head;
