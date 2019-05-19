import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const SingleCompany = ({ classes, company }) => {
  const { companyname, primarysymbol, primaryexchange } = company

  return (
    <ListItem>
      <ListItemText
        primary={companyname}
        secondary={`${primarysymbol} | ${primaryexchange}`}
      />
    </ListItem>
  )
}
export default SingleCompany
