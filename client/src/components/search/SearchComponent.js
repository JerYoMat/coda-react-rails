import React, { PureComponent } from 'react';
import SearchInput from './sub-components/SearchInput';
import SearchResults from './sub-components/SearchResults';
import filterCompanies from '../../functions/filterCompanies';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

class SearchComponent extends PureComponent {
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
    }
  }

  render() {
    return (
      <div>
        <SearchInput handleSubmit={this.handleSubmit} textChange={this.handleSearchChange} />
        <SearchResults companies={this.state.filteredCompanies} />
      </div>
    );
  }
}

const mapState = state => (
  {companies: state.companies.list}
)

export default connect(mapState)(SearchComponent);                                                                                                                                                 



