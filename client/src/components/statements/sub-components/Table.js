import React, { Component } from 'react';


//takes statement, column number to show as props, dates or years for header, title
class Table extends Component {
  state={
    isOpen: true
  }
  handleClick = () => {}
  
  

  render() {
    const { title, fiscalYears, statement,  } = this.props;
    
    
    return (
      <div>
        <div>
          {title} <i></i>
        </div>
          <table className="table table-bordered table-striped table-dark table-sm">
            <thead>
              <tr>
                <th scope="col">FY:</th>
                <th scope='col'>{fiscalYears[3]}</th>
                <th scope='col'>{fiscalYears[2]}</th>
                <th scope='col'>{fiscalYears[1]}</th>
              </tr>
            </thead>
            <tbody>
              
              {Object.keys(statement).map((key) => {
                const row = statement[key]
                if (statement[key].length > 1) {
                return (
                  <tr key={key}>
                  <td>{row[0]}</td>
                  <td  className='statement-num'>{row[3]}</td>
                  <td  className='statement-num'>{row[2]}</td>
                  <td  className='statement-num'>{row[1]}</td>
                  </tr>
                )}
              })}
          
            </tbody>
          </table>
        </div>
    )
  }

}

export default Table