import React from 'react';
import { Link } from '@reach/router';
import './Navbar.scss'
import { ReactComponent as Logo } from '../coda.svg';
const Navbar = () => {
  
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <span className='logo'><Logo className='app-logo'/>CoDA</span>
      </Link>
    </div>
  )

}

export default Navbar;
