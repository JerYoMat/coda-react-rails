import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core"


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