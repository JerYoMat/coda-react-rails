import React from 'react';
import './SearchResults.scss';
import { Link } from '@reach/router';
import SearchCard from './SearchCard';


const SearchResults = ({ companies }) => {
  if (!companies) {
    return <div>Enter a company to search or select industry/sector.</div>
  }

  return (
  <div>
    results ({companies.length})
    {companies.map(company => (
      <Link key={company.id} to={'/companies/' + company.id}>
        <SearchCard key={company.id} company={company} />
      </Link>
    ))}
    </div>
)
}



export default SearchResults;