import React from 'react';
import './Navbar.scss'
import { Link } from '@reach/router';
import { ReactComponent as Logo } from '../../images/coda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const Navbar = ({ user, viewingCompany}) => {
  return (
    <div className='row'>
      <div className='col-xl-2 nav-spacer'></div>
      <div className='navbar-container col-xl-8'>
          <Link to='/'>
            <span className='logo'><Logo className='app-logo'/>CoDA</span>
          </Link>
          { user && (
            <Link to='/users/:userId'>
                <FontAwesomeIcon icon={faUser} className='access-icon' />
            </Link>
          )}
          { !user && (
          <Link to='/login'>
            <FontAwesomeIcon icon={faSignInAlt} className='access-icon' size='lg' />
          </Link>
          )}
      </div>
      <div className='col-xl-2 nav-spacer'></div>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user.info
})

export default connect(mapState)(Navbar);
