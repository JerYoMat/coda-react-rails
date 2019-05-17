import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFavorite } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate } from "@reach/router";
import IconButton from "@material-ui/core/IconButton";
import DrawerTabs from './DrawerTabs';


const styles = theme => ({
  list: {
    width: 200
  },
  menuButton: {
    lineHeight: "65px",
    height: "65px",
    fontSize: "32px",
    color: theme.palette.primary, 
    "&:hover": {
      color: theme.palette.secondary,
    },
  },
  notUser: {
    display: "block"
  }
});

const DrawerToggler = ({ classes, favorites, removeFavorite, openModal, user }) => {
  const [drawerVisible, setDrawerVisibility] = useState(false);  

  return (
    <React.Fragment>
      <IconButton
        className={classes.menuButton}
        aria-label="Menu"
        onClick={() => {
          setDrawerVisibility(true);
        }}
      >
        <MenuIcon  />
      </IconButton>
      <Drawer
        open={drawerVisible}
        onClose={() => {
          setDrawerVisibility(false);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setDrawerVisibility(false);
          }}
          onKeyDown={() => {
            setDrawerVisibility(false);
          }}
        >
          <DrawerTabs favorites={favorites} user={user} />
        </div>
      </Drawer>
    </React.Fragment>
  );
};
const mapState = state => ({
  favorites: state.user.favorites,
  user: state.user.info,
  companies: state.companies.list
});

const mapDispatch = { removeFavorite };

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(DrawerToggler)
);
