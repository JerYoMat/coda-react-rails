import React from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import './CompaniesPage.scss'
/*temp test file */
import companies from '../components/search_test_file.js';


const CompaniesPage = () => {
  return (
    <div className='companies-page-wrapper'>
      <div className='search-results-container'>
        <Search/>
        <SearchResults companies={companies} />
      </div>
      <div className='sidebar-container'>Sidebar</div>
    </div>
  )
}

export default CompaniesPage;