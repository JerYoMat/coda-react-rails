import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  button: {
    position: "absolute",
    bottom: 10,
    right: 5
  },
  margin: {
    marginTop: '1rem',
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

const Signup = ({
  classes,
  email,
  password,
  handleSubmit,
  setEmail,
  setPassword,
  username,
  setUsername,
  passwordConfirmation,
  setPasswordConfirmation,
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
      type="text"
      value={username}
      label="Username"
      onChange={evt => setUsername(evt.target.value)}
      id="username"
    />
    <TextField
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
      className={classes.margin}
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
      id="signupPassword"
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
      value={passwordConfirmation}
      type="password"
      label="Password confirmation"
      autoComplete="false"
      onChange={evt => setPasswordConfirmation(evt.target.value)}
      id="PasswordConfirmations"
    />
    <Typography align="center" color="error" variant="body1">
      {error}
    </Typography>

    <Button
      type="submit"
      name="login"
      onClick={handleSubmit}
      variant="contained"
      color="primary"
      className={classes.button}
    >
      Signup
    </Button>
  </form>
);
export default withStyles(styles)(Signup)