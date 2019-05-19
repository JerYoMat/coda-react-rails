import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { getUniqueValuesForKeyFromCompanies } from '../../selectors';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CompanyList extends React.Component {
  state = {
    open: false
  };

  handleClick = e => {

    e.stopPropagation();
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, industries } = this.props;

    return (
      <List dense={true} className={classes.root}>
        {industries.map((indu, index) =>
         <ListItem key={index} button onClick={this.handleClick}>
          <ListItemText primary={indu} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        )}
      </List>
    );
  }
}

const mapState = (state, ownProps) => ({
  industries: getUniqueValuesForKeyFromCompanies(state, ownProps)
})

export default withStyles(styles)(connect(mapState)(CompanyList));
