import React from 'react';

const TableRow = ({years, fieldKey, data, field}) => {
  return (
    <tr>
      <td>{field[0]}</td>
      {
        years.map(year => (
          <td key={`${fieldKey}-${year}`}>{data[year][fieldKey]}</td>
      ))
      }
    </tr>
  )
}

export default TableRow;

//years is x coordinate
// field 