import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MyCompaniesList from './MyCompaniesList'
import Paper from '@material-ui/core/Paper'

function TabContainer ({ children, dir }) {
  return (
    <Paper component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Paper>
  )
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 450
  }
})

const DrawerTabs = ({ classes, theme, companies, favorites }) => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event, value) => {
    event.stopPropagation()
    setTabValue(value)
  }

  const handleChangeIndex = index => {
    this.setState({ value: index })
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
        >
          <Tab label='My Companies' />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <MyCompaniesList />
        </TabContainer>
      </SwipeableViews>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(DrawerTabs)
