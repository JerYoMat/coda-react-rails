import React, { useState } from "react";
import { logout, openLoginForm, closeLoginForm } from "../../actions";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import Logo from "../navbar/Logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Navbar.scss";
import Search from "../search/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Modal from "react-modal";
import LoginWrapper from "../login/LoginWrapper";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    height: "52px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    underline: false,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

const Navbar = ({
  classes,
  user,
  logout,
  modalOpen,
  openLoginForm,
  closeLoginForm
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const goToSettings = () => {
    navigate(`/users/${user.id}`);
    setAnchorEl(null);
  };
  const goToRoot = () => {
    navigate(`/`);
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout();
    goToRoot();
  };

  return (
    <div className='navbar-wrapper'>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              onClick={goToRoot}
            >
              <Logo />
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color='primary' />
              </div>
              <Search
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            {user && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  className={classes.iconHover}
                  onClick={event => setAnchorEl(event.currentTarget)}
                  color="primary"
                >
                  <AccountCircle color="primary" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={goToRoot}>Home</MenuItem>
                  <MenuItem onClick={goToSettings}>Settings</MenuItem>
                  <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </Menu>
              </div>
            )}

            {!user && (
              <Typography color="primary" variant="h6" onClick={openLoginForm}>
                Login
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeLoginForm}
        style={{
          content: {
            display: "flex",
            width: "50%",
            left: "25%",
            padding: 0,

            margin: 0
          }
        }}
      >
        <LoginWrapper />
      </Modal>
    </div>
  );
};

const mapState = state => ({
  user: state.user.info,
  modalOpen: state.user.modalOpen
});

const mapDispatch = { logout, openLoginForm, closeLoginForm };

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Navbar)
);
