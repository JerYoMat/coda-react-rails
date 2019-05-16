import React, { useState } from "react";
import { connect } from 'react-redux';
import { removeFavorite } from '../../actions';
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from '@material-ui/icons/Menu';
import { navigate } from '@reach/router';
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  list: {
    width: 250
  },
  menuButton: {
    position: 'relative',
    float: 'left',
    lineHeight: '65px',
    height: '65px',
    fontSize: '32px',
  }
};

const FavoriteDrawer = ({ classes, favorites, removeFavorite }) => {
  const [drawerVisible, setDrawerVisibility] = useState(false)
  const goToFavorite = id => {
    navigate("/companies/" + id);
  };
  const sideList = (
    <div className={classes.list}>
      <List>
        {Object.keys(favorites).map(f => (
          <ListItem key={f} onClick={()=>{goToFavorite(f)}}>
            <ListItemText primary={f} />
            <ListItemSecondaryAction  onClick={()=> {removeFavorite(favorites[f])}}>
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
        color="inherit"
        aria-label="Menu"
        onClick={() => {setDrawerVisibility(true)}}
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
}
const mapState = state => ({
  favorites: state.user.favorites
});

const mapDispatch = { removeFavorite };


export default withStyles(styles)(connect(mapState, mapDispatch)(FavoriteDrawer))

