import React from 'react';
import './HomeCard.scss';
import { Link } from '@reach/router';

const HomeCard = ({ heading, content, link}) => (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{heading}</h2>
        {content.map(line => (
          <p className='card-text'>{line}</p>
        ))}
        <Link to={link}>
        <button>View</button>
        </Link>
      </div>
    </div>
)
export default HomeCard;