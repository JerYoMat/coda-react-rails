import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
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

const DrawerToggler = ({ classes, loggedIn }) => {
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
          <DrawerTabs disableMyCompanies={loggedIn ? true : false}/>
        </div>
      </Drawer>
    </React.Fragment>
  );
};


export default withStyles(styles)(
  DrawerToggler
);
