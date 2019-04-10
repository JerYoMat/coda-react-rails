import React, { useState } from 'react';
import './Search.scss'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleSubmit= (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}className='search-container'>
      <input type="text" name="email" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} placeholder="... start typing company name"/>
    </form>
  )
}


export default Search;