import React from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './DropDown.scss';

const DropDown = ({ userId, logout }) => {
  const handleClick = () => {
    navigate(`/users/${userId}`)
  }
  
  return (
    <div className='dropdown' >
      <FontAwesomeIcon icon={faUserCircle} className='user-icon' size='lg' />
      <div className='dropdown-content'>
        <span onClick={handleClick}>Settings</span>
        <span onClick={logout}>Log out</span>
      </div>
    </div>
  )
}

export default DropDown;