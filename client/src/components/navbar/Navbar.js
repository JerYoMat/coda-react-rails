import React from 'react';
import { Link } from '@reach/router';
import './Navbar.scss'
import { ReactComponent as Logo } from '../../coda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <span className='logo'><Logo className='app-logo'/>CoDA</span>
      </Link>
      <Link to='/users/:id'>
        <FontAwesomeIcon icon={faSignInAlt} />
      </Link>
    </div>
  )

}

export default Navbar;
