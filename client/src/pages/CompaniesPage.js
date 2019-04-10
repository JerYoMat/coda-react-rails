import React from 'react';
import SearchComponent from '../components/search/SearchComponent';
import { connect } from 'react-redux';
import './CompaniesPage.scss'



const CompaniesPage = ({ companies }) => {
  return (
    <div className='companies-page-wrapper'>
      <div className='search-results-container'>
        <SearchComponent companies={companies} />
      </div>
      <div className='sidebar-container'>Sidebar</div>
    </div>
  )
}

const mapState = state => ({
  companies: state.companies.list[0]
})

export default connect(mapState)(CompaniesPage);