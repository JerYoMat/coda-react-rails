import React from 'react';

const SearchCard = ({ company }) => (
  <div className='card search-result col-md-8'>
    <div className='search card-body'>
      <h5 className='card-title'>
        Company:{company.companyname}
      </h5>
      <div className='row company-data'>
      <div className='col-md-6'>
        <p><span className='left-side'>Ticker: </span><span className='right-side'>{company.primarysymbol}</span></p>
        <p><span className='left-side'>Exchange: </span><span className='right-side'>{company.primaryexchange}</span></p>
      </div>
      <div className='col-md-6'>
        <p><span className='left-side'>Industry: </span><span className='right-side'>{company.industry}</span></p>
        <p><span className='left-side'>Sector: </span><span className='right-side'>{company.sector}</span></p>
      </div>
      </div>
    </div>
  </div>
)

export default SearchCard;