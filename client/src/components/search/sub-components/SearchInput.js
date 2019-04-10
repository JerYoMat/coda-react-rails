import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  handleChange = evt => {
    this.props.textChange(evt);
  };

  render() {
    return (
      <form>
        <input type='text' onChange={this.handleChange}/>
      </form>
    );
  }
}

export default SearchInput;