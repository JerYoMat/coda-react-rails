
import teal from '@material-ui/core/colors/teal';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[500],
      main: teal[700],
      dark: teal[900],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;