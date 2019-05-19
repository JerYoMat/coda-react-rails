import React, { useState } from "react";
import { logout, openLoginForm, closeLoginForm } from "../../actions";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import Logo from "../navbar/Logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Navbar.scss";
import Search from "../search/Search";
import Modal from "react-modal";
import LoginWrapper from "../login/LoginWrapper";
import DrawerToggler from "../drawer/DrawerToggler";
import ExitToApp from "@material-ui/icons/ExitToApp";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    boxSizing: "border-box",
    height: "60px"
  },
  menuButton: {
    position: 'relative',
    height: "65px",
    lineHeight: "65px",
    fontSize: "32px"
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
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
  iconHover: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.light
    }
  }
});

const Navbar = ({
  classes,
  user,
  logout,
  modalOpen,
  openLoginForm,
  closeLoginForm,
  demo = "false"
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
    <div className="navbar-wrapper">
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar>
            <div onClick={() => {goToRoot()}}>
            <Logo  width='48px' height='52px'/>
            </div>
            <DrawerToggler
              loggedIn={user ? true : false}
              openModal={openLoginForm}
            />
              <Search demo={demo} />
            <div className={classes.grow} />
            {user && (
              <div>
                <IconButton
                  className={classes.iconHover}
                  onClick={event => setAnchorEl(event.currentTarget)}
                >
                  <AccountCircle
                    className={classes.iconHover}
                    style={{ fontSize: "32px" }}
                  />
                </IconButton>
                <Menu
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
              <IconButton className={classes.iconHover} onClick={openLoginForm}>
                <ExitToApp
                  className={classes.iconHover}
                  style={{ fontSize: "32px" }}
                />
              </IconButton>
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
            minWidth: "250px",
            width: "50%",
            left: "25%",
            padding: 0,
            borderColor: "#424242",
            top: "20%",
            maxHeight: "400px",
            backgroundColor: "#424242"
          },
          overlay: { backgroundColor: "rgba(0,0,0, 0.6)" }
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
