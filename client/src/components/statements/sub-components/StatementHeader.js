import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StatementHeader = ({years}) => (
  <TableHead>
    <TableRow>
    <TableCell padding='dense'>Fiscal Year</TableCell>
    {
      years.map(year => (
        <TableCell padding='dense' align='right' key={`fy-${year}`}>{year}</TableCell>
    ))
    }
    </TableRow>
  </TableHead>

)

export default StatementHeader;

