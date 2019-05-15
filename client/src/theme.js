
import teal from '@material-ui/core/colors/teal';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[500],
      main: teal[700],
      dark: teal[900],
      contrastText: "#f5f5f5"
    },
    secondary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
      contrastText: '#D3D3D3'
    },
    error: {
      main: red.A400
    },
    type: "dark"
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;