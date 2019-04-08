import React from 'react';
import './HomeCard.scss';

const HomeCard = ({ heading, content}) => (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{heading}</h2>
        {content.map(line => (
          <p className='card-text'>{line}</p>
        ))}
        <button>View</button>
      </div>
    </div>
)
export default HomeCard;