import React from 'react';
import { Link } from '@reach/router';
import './Navbar.scss'
import { ReactComponent as Logo } from '../coda.svg';
const Navbar = ({ user }) => {
  
  return (
    <div className='navbar-container'>
      <Link to='/'>
      <span className='logo'><Logo className='app-logo'/></span>
      </Link>
      <Link to='/simulator'>
        <span className='nav-link'>Simulator</span>
      </Link>
      <Link to='/compare'>
        <span className='nav-link'>Compare</span>
      </Link>

      <Link to='/companies'>
        <span className='nav-link'>Companies</span>
      </Link>
      
      <Link to='/'>
        <span className='nav-link'>Home</span>
      </Link>
     
    </div>
  )

}

export default Navbar;
