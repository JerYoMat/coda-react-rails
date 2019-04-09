import React from 'react';
import './HomePage.scss'
import CardStack from '../components/CardStack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <div>
      <div className='banner-container'>
        <div className='welcome-card col-md-5 offset-md-2'>
          <h2>Welcome to CoDA</h2>
          <p>A data playground for credit analysts</p>
          <div className='button-container'>
          <button> <FontAwesomeIcon icon="igloo" /></button>
          <button>T</button>
          </div>
          
        </div>
      </div>
      <CardStack />
    </div>
  )
}

export default HomePage;