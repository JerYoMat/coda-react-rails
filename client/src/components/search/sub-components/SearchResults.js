import React from 'react';
import { Link } from '@reach/router';
import SearchCard from './SearchCard';


const SearchResults = ({ companies }) => {
  if (!companies) {
    return <div></div>
  }

  return (
  <div className='results-container'>
    {companies.map(company => (
      <Link className='result-card'key={company.id} to={'/companies/' + company.id}>
        <SearchCard key={company.id} company={company} />
      </Link>
    ))}
    </div>
)
}



export default SearchResults;