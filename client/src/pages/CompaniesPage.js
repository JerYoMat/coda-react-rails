import React from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import './CompaniesPage.scss'

const CompaniesPage = () => {
  return (
    <div className='companies-page-wrapper'>
      <div className='search-results-container'>
        <Search/>
        <SearchResults />
      </div>
      <div className='sidebar-container'>Sidebar</div>
    </div>
  )
}

export default CompaniesPage;