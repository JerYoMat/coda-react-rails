import React, { PureComponent } from 'react';
import './SearchInput.scss';

class SearchInput extends PureComponent {
  handleChange = evt => {
    this.props.textChange(evt);
  };

  handleFormSubmit = evt => {
    evt.preventDefault()
    this.props.handleSubmit(evt)
  }

  render() {
    return (
      <form className='search-container' onSubmit={this.handleFormSubmit}>
        <input type='text' onChange={this.handleChange}/>
      </form>
    );
  }
}

export default SearchInput;