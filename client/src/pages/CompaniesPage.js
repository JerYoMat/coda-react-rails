import React from 'react';
import SearchComponent from '../components/search/SearchComponent';

import './CompaniesPage.scss'
/*temp test file */
import companies from '../misc/search_test_file.js';


const CompaniesPage = () => {
  return (
    <div className='companies-page-wrapper'>
      <div className='search-results-container'>
        <SearchComponent companies={companies} />
      </div>
      <div className='sidebar-container'>Sidebar</div>
    </div>
  )
}

export default CompaniesPage;