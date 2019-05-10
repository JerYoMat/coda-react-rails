import React from 'react';

const TableHeader = ({years}) => (
  <thead>
    <tr>
      <th>FY</th>
      {
        years.map(year => (
          <th key={`fy-${year}`}>{year}</th>
      ))
      }
    </tr>
  </thead>
)

export default TableHeader;

