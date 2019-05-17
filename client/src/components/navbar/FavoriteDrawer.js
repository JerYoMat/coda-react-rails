import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFavorite } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate } from "@reach/router";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  list: {
    width: 250
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

const FavoriteDrawer = ({ classes, favorites, removeFavorite, openModal, loggedIn }) => {
  const [drawerVisible, setDrawerVisibility] = useState(false);
  const goToFavorite = id => {
    navigate("/companies/" + id);
  };
  const sideList = (
    <div className={classes.list}>
      <List>
        {Object.keys(favorites).length === 0 && !loggedIn &&(
          <ListItem onClick={openModal}>
            <Typography
              className={classes.notUser}
              variant="h6"
              color="primary"
            >
              Login/Signup
            </Typography>
          </ListItem>
        )}
        {Object.keys(favorites).length === 0 && loggedIn &&(
          <ListItem>
            <Typography
              className={classes.notUser}
              variant="body1"
              color="primary"
            >
              Companies that you follow will appear here.  Search and press the 'Add' button to get started.
            </Typography>
          </ListItem>
        )}
        {Object.keys(favorites).map(f => (
          <ListItem
            key={f}
            onClick={() => {
              goToFavorite(f);
            }}
          >
            <ListItemText primary={f} />
            <ListItemSecondaryAction
              onClick={(e) => {
                e.stopPropagation()
                removeFavorite(favorites[f]);
              }}
            >
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );

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
          {sideList}
        </div>
      </Drawer>
    </React.Fragment>
  );
};
const mapState = state => ({
  favorites: state.user.favorites
});

const mapDispatch = { removeFavorite };

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(FavoriteDrawer)
);
