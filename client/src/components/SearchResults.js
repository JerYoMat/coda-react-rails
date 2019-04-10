import React from 'react';
import './SearchResults.scss';
import { Link } from '@reach/router';


const SearchResults = ({ companies }) => {
 if (!companies) {
   return <div></div>
 }
 
 return (
  <div>
    results ({companies.length})
    {companies.map(company => (
      <Link to={'/companies/' + company.id}>
        <SearchCard key={company.id} company={company} />
      </Link>
    ))}
    </div>
)
}


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

export default SearchResults;