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

const Login = ({ classes, email, password, handleSubmit, setEmail, setPassword }) => (
  <form onSubmit={handleSubmit}>
    <div>    
    <TextField
      label="email"
      value={email}
      onChange={(evt)=>setEmail(evt.target.value)}
    />
    </div>
    <div>
    <TextField
      label="password"
      value={password}
      onChange={(evt) => setPassword(evt.target.value)}
    />
    </div>
    <Button name='login' onClick={handleSubmit} variant="contained" color="secondary" className={classes.button}>
      Login
    </Button>
  </form>
)
export default withStyles(styles)(Login)