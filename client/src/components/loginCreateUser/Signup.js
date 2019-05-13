import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Signup = ({ classes, email, password, handleSubmit, setEmail, setPassword, username, setUsername, passwordConfirmation, setPasswordConfirmation }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <TextField
        label="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
    </div>
    <div>    
      <TextField
        label="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
    </div>
    <div>
      <TextField
        label="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
    </div>
    <div>
      <TextField
        label="password"
        value={passwordConfirmation}
        onChange={(evt) => setPasswordConfirmation(evt.target.value)}
      />
    </div>
    <Button type='submit' name='login' onClick={handleSubmit} variant="contained" color="secondary" className={classes.button}>
      Signup
    </Button>
  </form>
)
export default withStyles(styles)(Signup)