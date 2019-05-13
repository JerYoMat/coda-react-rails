import React, { useState } from 'react';
import { logout } from '../../actions';
import { connect } from 'react-redux';
import { Link as RouterLink } from '@reach/router';
import { ReactComponent as Logo } from '../../images/coda.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Navbar.scss';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const Navbar = ({ classes, user, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  const rootLink = props => <RouterLink to={'/'} {...props} />
  const settingsLink = props => <RouterLink to={'/users/+user.id'} {...props} />
  const loginLink = props => <RouterLink to={'/login'} {...props} />

  const handleLogOut = () => {
    setAnchorEl(null)
    logout()
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            <Link className={classes.menuButton} component={rootLink}>
              <Logo className='app-logo' />
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color='primary' />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          {user && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup='true'
                className={classes.iconHover}
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color='primary'
              >
                <AccountCircle color='primary' />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
              
                <MenuItem>
                  <Link component={settingsLink}>
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => handleLogOut() }>Log out</MenuItem>
              </Menu>
            </div>
          )}
          {!user && (
            <div>
              <IconButton color='primary'>
                <Link component={loginLink}>
                  Login
                </Link>
              </IconButton>
              </div>
              )
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapState = state => ({
  user: state.user.info
})

const mapDispatch = { logout }


export default withStyles(styles)(connect(mapState, mapDispatch)(Navbar));
