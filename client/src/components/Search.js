import React, { useState } from 'react';
import './Search.scss'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className='search-container'>
      <input type="text" name="email" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} placeholder="... start typing company name"/>
    </div>
  )
}


export default Search;