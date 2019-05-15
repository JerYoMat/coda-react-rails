import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StatementRow = ({ years, fieldKey, data, field}) => {
  return (
    <TableRow>
      <TableCell padding='none'>{field[0]}</TableCell>
      {
        years.map(year => (
          <TableCell padding='none' align='right' key={`${fieldKey}-${year}`}>{data[year][fieldKey]}</TableCell>
      ))
      }
    </TableRow>
  )
}

export default StatementRow;

//years is x coordinate
// field 