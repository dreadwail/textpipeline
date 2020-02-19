import App from 'components/App';
import Page from 'components/Page';
import React from 'react';
import ReactDOM from 'react-dom';

import { description, footer, siteName } from './config';

ReactDOM.render(
  <App>
    <Page siteName={siteName} description={description} footer={footer} />
  </App>,
  document.getElementById('root')
);
