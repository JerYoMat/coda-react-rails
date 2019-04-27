import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions';



// props error, loading, login, signup
class LoginCreateUser extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        newUser: false
      }
  }

  handleSignup = () => this.props.signup(this.state.username, this.state.email, this.state.password)
  render() {
  return (
    <div className="LoginCreate">
      <p>Please log in or sign up to continue.</p>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Username
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
        </label>
        {this.state.newUser && (
          <label>
          Confirm Password
          <input
            name="password_confirmation"
            type="password"
            value={this.state.passwordConfirmation}
            onChange={e => this.setState({passwordConfirmation: e.target.value})}
          />
        </label>
        )}
        {this.props.error && (
          <div className="error">{this.props.error.message}</div>
        )}
        <button
          type="submit"
          disabled={this.props.loading}
          onClick={() => this.props.login(this.state.email, this.state.password)}
        >
          Login
        </button>
        <button
          disabled={this.props.loading}
          onClick={() => this.props.signup(this.state.username, this.state.email, this.state.password)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
}
const mapState = state => ({
  loading: state.user.loading,
  error: state.user.error
});
const mapDispatch = { signup, login };
export default connect(
  mapState,
  mapDispatch
)(LoginCreateUser);