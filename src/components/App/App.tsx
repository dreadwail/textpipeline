import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './theme';

const App: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>{children}</Router>
  </ThemeProvider>
);

export default App;
