import React from 'react';
import './Navbar.scss'
import { ReactComponent as Logo } from '../../images/coda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <span className='logo'><Logo className='app-logo'/>CoDA</span>
        <FontAwesomeIcon icon={faSignInAlt} />
        <FontAwesomeIcon icon={faUserPlus} />
    </div>
  )
}

export default Navbar;
