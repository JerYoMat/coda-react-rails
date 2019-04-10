import React from 'react';

const SearchCard = ({ company }) => (
  <div className='card'>
    <div className='search card-body'>
      <h5 className='card-title'>
        Company:{company.companyname}
      </h5>
      <p>
        Ticker:  
        <strong>
         <span>  </span>
         {company.primarysymbol}
        </strong>
      </p>
      <p>
        Exchange: 
        <strong>
          <span>  </span>
          {company.primaryexchange}
        </strong>
      </p>
    
    </div>
  </div>
)

export default SearchCard;