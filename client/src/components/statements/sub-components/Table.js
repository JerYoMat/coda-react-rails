import React, { Component } from 'react';


//takes statement, column number to show as props, dates or years for header, title
class Table extends Component {
  state={
    isOpen: true
  }
  handleClick = () => {}
  
  render() {
    const { title, numColumns, fiscalYears, statement } = this.props;
    return (
      <div>
        <div>
          {title}
        </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Period End Date:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }

}

export default Table