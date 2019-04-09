import React from 'react';
import './HomePage.scss'
import CardStack from '../components/CardStack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"

const HomePage = () => {
  return (
    <div>
      <div className='banner-container'>
        <div className='welcome-card col-md-5 offset-md-2'>
          <h2>Welcome to CoDA</h2>
          <p>A data playground for credit analysts</p>
          <div className='button-container'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          
        </div>
      </div>
      <CardStack />
    </div>
  )
}

export default HomePage;