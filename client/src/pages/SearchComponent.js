import React, { Component } from 'react';
import './HomePage.scss'
import SearchInput from '../components/search/sub-components/SearchInput';
import SearchResults from '../components/search/sub-components/SearchResults';
import filterCompanies from '../functions/filterCompanies';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import '../components/Navbar.scss'
import { ReactComponent as Logo } from '../coda.svg';

class SearchComponent extends Component {
  state={
    filteredCompanies: filterCompanies("", 10, this.props.companies)
  }

  handleSearchChange = evt => {
    this.setState({
      filteredCompanies: filterCompanies(evt.target.value, 10, this.props.companies)
    });
  };

  handleSubmit = () => {
    if (this.state.filteredCompanies) {
      const targetCompany = this.state.filteredCompanies[0]
      navigate(`/companies/${targetCompany.id}`)
      this.setState({ filteredCompanies: ''})
    }
  }

  render() {
    return (
      <div>
        <div className='navbar-container'>
          <Link to='/'>
          <span className='logo'><Logo className='app-logo'/></span>
          </Link>      
          <Link to='/'>
            <span className='nav-link'>Home</span>
          </Link>
      </div>
      <div className='banner-container'>
        <div className='welcome-card col-md-6 offset-md-3'>
          <h2>Welcome to CoDA</h2>
          <SearchInput handleSubmit={this.handleSubmit} textChange={this.handleSearchChange} />
        </div>
      </div>
      <div>
      <SearchResults companies={this.state.filteredCompanies} />
      </div>
    </div>
    );
  }
}

const mapState = state => ({
  companies: state.companies.list
})

export default connect(mapState)(SearchComponent);                                                                                                                                                 



