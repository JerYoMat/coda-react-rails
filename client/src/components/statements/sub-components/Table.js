import React, { useState } from 'react';

const Table = ({ keyArray, periodData, title, subTitle }) => {
  const [tableOpen, setTableOpen] = useState(true)
  const handleClick = () => {setTableOpen(tableOpen ? false : true)}
  return (
    <div className='data-table-container'>
      <div onClick={handleClick}>{title}</div>
      {tableOpen && 
        <React.Fragment>
        <div>{subTitle}</div>
        <table className='fin-table'>
          <tr>
            <th></th>
          </tr>

        </table>
        </React.Fragment>
      }
    </div>
  )
}

export default Table;