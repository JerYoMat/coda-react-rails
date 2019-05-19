import React from 'react'
import { openLoginForm } from '../actions'
import Search from '../components/search/Search'
import './HomePage.scss'
import Logo from '../components/navbar/Logo'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { connect } from 'react-redux'

const styles = theme => ({
  fab: {
    position: 'sticky',
    top: '90vh',
    left: '90vw',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
})

const HomePage = ({ classes, openLoginForm }) => {
  return (
    <div className='home-root'>
      <div className='home-title'>
        <Typography align='center' variant='h1'>
          C<Logo width='72px' height='78px' viewBox='2 -6 20 32' />
          DA
        </Typography>
      </div>
      <div className='search-wrapper'>
        <Search />
      </div>
      <Tooltip
        title={
          <React.Fragment>
            <Typography variant='h6' color='inherit'>
              Why Sign Up?
            </Typography>
            <List>
              <ListItem button>
                <ListItemText primary='Choose what data you see for each company' />
              </ListItem>
              <ListItem button>
                <ListItemText primary='Create your own company list to easily follow changes' />
              </ListItem>
            </List>
          </React.Fragment>
        }
      >
        <Fab onClick={openLoginForm} className={classes.fab}>
          <Typography variant='h4'>?</Typography>
        </Fab>
      </Tooltip>
    </div>
  )
}

export default withStyles(styles)(
  connect(
    null,
    { openLoginForm }
  )(HomePage)
)
