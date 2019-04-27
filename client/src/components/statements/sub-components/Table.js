import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons"

//takes statement, column number to show as props, dates or years for header, title
const Table = ({ title, fiscalYears, statement}) => {
    
  const [open, setOpen] = useState(false)
  

  return (
  <div className='statement-table-wrapper' onClick={() => {setOpen(!open)}}>
    <h5>
      {title}  {
        open ? (<FontAwesomeIcon icon={faChevronDown} />) 
          : (<FontAwesomeIcon icon={faChevronRight} />)
      }
    </h5>
    { open && (
      <table display={open} className="table table-bordered table-striped table-dark table-sm">
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
            )} else {
              return <div></div>
            } 
          })}
      
        </tbody>
      </table>
      )}
    </div>
  )
}

export default Table