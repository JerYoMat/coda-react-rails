import React, { PureComponent } from 'react';
import './SearchInput.scss';

class SearchInput extends PureComponent {
  handleChange = evt => {
    this.props.textChange(evt);
  };

  render() {
    return (
      <form className='search-container'>
        <input type='text' onChange={this.handleChange}/>
      </form>
    );
  }
}

export default SearchInput;