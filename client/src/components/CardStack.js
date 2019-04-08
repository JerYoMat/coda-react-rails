import React from 'react';
import HomeCard from './HomeCard';
import cardContent from '../content/HomePage/cardContent.js';

const CardStack = () => {
  return (
  <div className='col-md-8 offset-md-2'>
    {cardContent.map(obj => (
    <HomeCard key={obj.id} heading={obj['heading']} content={obj['content']} />
      )
     )
    }
  </div>
  )
}

export default CardStack;
