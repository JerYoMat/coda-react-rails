import React from 'react';
import './Card.scss';

const Card = ({ heading, contentArray}) => (
    <div className='card col-md-8'>
      <div className='card-body'>
        <h2 className='card-title'>{heading}</h2>
        {contentArray.map(line => (
          <p>{line}</p>
        ))}
      </div>
    </div>
)
export default Card;