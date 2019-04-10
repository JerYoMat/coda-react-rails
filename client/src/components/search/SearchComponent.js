import React, { PureComponent } from 'react';
import SearchInput from './sub-components/SearchInput';
import SearchResults from './sub-components/SearchResults';
import filterCompanies from '../../functions/filterCompanies';

//placeholder for companies that will come form redux store.


class SearchComponent extends PureComponent {
  state={
    filteredCompanies: filterCompanies("", 10, this.props.companies)
  }
  handleSearchChange = evt => {
    this.setState({
      filteredCompanies: filterCompanies(evt.target.value, 10, this.props.companies)
    });
  };
  render() {
    return (
      <div>
        <SearchInput textChange={this.handleSearchChange} />
        <SearchResults companies={this.state.filteredCompanies} />
      </div>
    );
  }
}

export default SearchComponent;                                                                                                                                                 



