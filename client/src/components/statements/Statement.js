import React from 'react';
import TableRow from './sub-components/TableRow';
import TableHeader from './sub-components/TableHeader';

const Statement = ({fields, data, years}) => {
  //modify fields to dump inputs not in user setting
  let userFields = {...fields} 
  Object.keys(userFields).forEach(key => {
    if (!userFields[key][1]) delete userFields[key]
  })
  return (
    <table>
      <TableHeader years={years} />
      <tbody>
        {
          Object.keys(userFields).map((key) => (
            <TableRow key={key} field={userFields[key]} years={years} data={data} fieldKey={key}/> 
          ))
        }
      </tbody>
    </table>
  )   
}
export default Statement;
