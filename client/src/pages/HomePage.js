import React from 'react';
import './HomePage.scss'
import SearchComponent from '../components/search/SearchComponent';
import { connect } from 'react-redux';


const HomePage = ({ companies }) => {
  return (
    <div>
      <div className='banner-container'>
        <div className='welcome-card col-md-7 offset-md-2'>
          <h2>Welcome to CoDA</h2>
          <ul>
            <li>Search companies listed on NYSE</li>
            <li>Receive Altman Z-Score, Stock Price and Financial Data</li>
            <li>Follow Companies</li>
            <li>Customize your Data</li>
          </ul>
        </div>
      </div>
      <SearchComponent companies={companies} />
    </div>
  )
}

const mapState = state => (
  {companies: state.companies.list}
)


export default connect(mapState)(HomePage);