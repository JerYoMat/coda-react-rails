import React from 'react'
import { getFavoriteCompanies } from '../../selectors'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 280,
    backgroundColor: theme.palette.background.paper
  }
})

const MyCompaniesList = ({ classes, favorites, companies }) => {
  const handleClick = id => {
    navigate(`/companies/${id}`)
  }
  return (
    <div className={classes.root}>
      <List component='nav'>
        {companies.map(company => (
          <ListItem
            key={company.id}
            button
            onClick={() => {
              handleClick(company.id)
            }}
          >
            <ListItemText primary={company.companyname} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
const mapState = state => ({
  companies: getFavoriteCompanies(state),
  favorites: state.user.favorites
})

export default withStyles(styles)(connect(mapState)(MyCompaniesList))
