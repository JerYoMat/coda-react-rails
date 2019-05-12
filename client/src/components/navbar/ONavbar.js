import React from 'react';
import { Link } from '@reach/router';
import { logout } from '../../actions';
import { ReactComponent as Logo } from '../../images/coda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import DropDown from './sub-components/DropDown';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navbar = ({ user, logout}) => {
  return (
    <div className='row'>
      <div className='col-xl-2 p-0 nav-spacer'></div>
      <div className='navbar-container col-xl-8 p-0'>
          <Link to='/'>
            <span className='logo'><Logo className='app-logo'/>CoDA</span>
          </Link>
          { user && (
            <DropDown userId={user.id} logout={logout} />
          )}
          { !user && (
          <Link to='/login'>
            <FontAwesomeIcon icon={faSignInAlt} className='login-icon' size='lg' />
          </Link>
          )}
      </div>
      <div className='col-xl-2 p-0 nav-spacer'></div>
    </div>
  )
}

const mapState = state => ({
  user: state.user.info
})
const mapDispatch = {
  logout 
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Navbar));
