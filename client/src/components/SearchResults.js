import React from 'react';
import './SearchResults.scss';

const SearchResults = ({ companies }) => (
 <div className='search-results-container'>
   { !companies ? 
      <div>Nothing here yet</div>
      : <div>Placeholder</div>
   }
 </div>
)

export default SearchResults;