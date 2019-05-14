import React, { useState } from 'react';
import { login, signup } from '../../actions';
import Login from './Login';
import Signup from './Signup';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    width: '100%'    
  
  }
});



const LoginWrapper =({ classes, user, login, signup }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showing, setShowing] = 
  useState(0)  

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }
  const handleSignup = (e) => {
    e.preventDefault()
    signup(username, email, password)
  }

  if (user) {
    return <Redirect to="/" noThrow />;
  }
  
  return (
  <Paper square className={classes.root}>
    <Tabs
      value={showing}
      onChange={() => setShowing(showing ? 0 : 1)}
      variant="fullWidth"
      indicatorColor="primary"
      color="primary"
    >
      <Tab icon={<FontAwesomeIcon icon={faSignInAlt} size='lg' />} label="Sign in" />
      <Tab icon={<FontAwesomeIcon icon={faUserPlus} size='lg' />} label="Sign up" />
    </Tabs>
    {showing === 0 && 
      <Login 
      email={email} 
      password={password} 
      setEmail={setEmail} 
      setPassword={setPassword} 
      handleSubmit={handleLogin}/>
    }
    {showing === 1 && 
      <Signup 
        username={username}
        email={email}
        passwordConfirmation={passwordConfirmation}
        password={password}
        setPasswordConfirmation={setPasswordConfirmation}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSignup}
      />}
  </Paper>
);
}

const mapState = state => ({
  user: state.user.info,
  error: state.user.error
})

const mapDispatch = {
  login, signup
}


export default withStyles(styles)(connect(mapState, mapDispatch)(LoginWrapper));