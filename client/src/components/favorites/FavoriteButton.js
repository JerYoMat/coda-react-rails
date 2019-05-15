import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    position: "relative",
    float: "right",
    margin: theme.spacing.unit

  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});


const FavoriteButton = ({  classes, companyId, user, favorite, addFavorite, removeFavorite, loading }) => {


  if (!user) {
    return <div></div>
  }
  if (!favorite) {
    return (
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => addFavorite(companyId)}
        className={classes.button}
      >
        <AddIcon className={classes.leftIcon} />
        Add
      </Button>
    );
}
  return (
    <Button
      variant="contained"
      size="small"
      color="primary"
      className={classes.button}
      onClick={() => removeFavorite(favorite)}
    >
      <RemoveIcon className={classes.leftIcon} />
      Remove
    </Button>
  );
}

const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return { 
    user: state.user.info,
    favorite: state.user.favorites[companyId],
    loading: state.user.syncingFavorites
  }
}
const mapDispatch = { addFavorite, removeFavorite }


export default withStyles(styles)(connect(mapState, mapDispatch)(FavoriteButton))



