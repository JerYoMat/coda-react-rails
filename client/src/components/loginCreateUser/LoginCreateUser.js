import React, { useState } from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import { login, signup } from '../../actions';
import './LoginCreateUser.scss';


// props error, loading, login, signup
const LoginCreateUser = ({ error, user, login, signup }) => {
  if (user) {
    return <Redirect to="/" noThrow />;
  }
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }

  const handleNewUser = (e) => {
    e.preventDefault()
    signup(username, email, password)
  }
  const showSignup = () => {
    document.querySelector(".rec-prism").style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
  const showLogin = () => {
    document.querySelector(".rec-prism").style.transform = "translateZ(-100px)";
  }
  
  return (
  <div>
  <div className="wrapper">
    <div className="rec-prism">
      <div className="face face-top">
        <div className="content">
        </div>
      </div>
      <div className="face face-front">
        <div className="content">
          <h2>Sign in</h2>
          <form onSubmit={handleLogin}>
            <div className="field-wrapper">
              <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email"/>
              <label>email</label>
            </div>
            <div className="field-wrapper">
            <input type="password" name="password" value={password}onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
              <label>password</label>
            </div>
            
            {error ? (<div className='error-message'>{error.message}</div>) : (<div></div>) }
            
            <div className="field-wrapper">
              <input type="submit"/>
            </div>
            <span className="signup" onClick={showSignup}>Not a user?  Sign up</span>
          </form>
        </div>
      </div>
      <div className="face face-back">
        <div className="content">
        
        </div>
      </div>
      <div className="face face-right">
        <div className="content">
          <h2>Sign up</h2>
          <form onSubmit={handleNewUser}>
            <div className="field-wrapper">
            <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
              <label>Username</label>
            </div>
            <div className="field-wrapper">
            <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              <label>email</label>
            </div>
            <div className="field-wrapper">
              <input type="password" name="password" value={password}onChange={(e)=>{setPassword(e.target.value)}}/>
              <label>password</label>
            </div>
            <div className="field-wrapper">
            <input type="password" name="passwordConfirmation" value={passwordConfirmation}onChange={(e)=>{setPasswordConfirmation(e.target.value)}}/>
              <label>re-enter password</label>
            </div>
            <div className="field-wrapper">
              <input disabled={password === passwordConfirmation ? (false) : (true)}type="submit"/>
            </div>
            <span className="signin" onClick={showLogin}>Already a user?  Sign in</span>
          </form>
        </div>
      </div>
      <div className="face face-left">
        <div className="content">
        </div>
      </div>
      <div className="face face-bottom">
        <div className="content">
          <div className="welcome-msg">
          
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}


const mapState = state => ({
  user: state.user.info,
  error: state.user.error
})

const mapDispatch = {
  login, signup
}

export default connect(mapState, mapDispatch)(LoginCreateUser);


