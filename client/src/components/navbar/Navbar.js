import React from 'react';
import './Navbar.scss'
import { Link } from '@reach/router';
import { logout } from '../../actions';
import { ReactComponent as Logo } from '../../images/coda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import DropDown from './sub-components/DropDown';

const Navbar = ({ user, logout}) => {
  return (
    <div className='row'>
      <div className='col-xl-2 nav-spacer'></div>
      <div className='navbar-container col-xl-8'>
          <Link to='/'>
            <span className='logo'><Logo className='app-logo'/>CoDA</span>
          </Link>
          { user && (
            <DropDown userId={user.id} logout={logout} />
          )}
          { !user && (
          <Link to='/login'>
            <FontAwesomeIcon icon={faSignInAlt} className='login-icon' size='lg' />
          </Link>
          )}
      </div>
      <div className='col-xl-2 nav-spacer'></div>
    </div>
  )
}

const mapState = state => ({
  user: state.user.info
})
const mapDispatch = {
  logout 
}

export default connect(mapState, mapDispatch)(Navbar);
