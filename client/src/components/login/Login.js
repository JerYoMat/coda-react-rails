import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  button: {
    position: "absolute",
    bottom: 10,
    right: 5
  },
  margin: {
    marginTop: "1rem",
    width: "80%",
    left: "10%"
  },
  cssLabel: {
    "&$cssFocused": {
      color: theme.palette.secondary.light
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: theme.palette.secondary.main
    }
  }
});

const Login = ({
  classes,
  email,
  password,
  handleSubmit,
  setEmail,
  setPassword,
  error
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      autoFocus={true}
      className={classes.margin}
      autoComplete="false"
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          underline: classes.cssUnderline
        }
      }}
      value={email}
      type="text"
      label="Email"
      onChange={evt => setEmail(evt.target.value)}
      id="loginEmail"
    />
    <TextField
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          underline: classes.cssUnderline
        }
      }}
      value={password}
      autoComplete="false"
      type="password"
      label="Password"
      onChange={evt => setPassword(evt.target.value)}
      id="loginPassword"
    />
    <Typography align='center' color="error" variant="body1">
      {error}
    </Typography>

    <Button
      type="submit"
      onSubmit={handleSubmit}
      name="login"
      variant="contained"
      color="primary"
      className={classes.button}
    >
      Login
    </Button>
  </form>
);
export default withStyles(styles)(Login)