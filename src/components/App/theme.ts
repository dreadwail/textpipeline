import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h2: {
      fontSize: 30,
      fontWeight: 500,
    },
    h3: {
      fontSize: 22,
      fontWeight: 500,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 20,
    },
  },
});
