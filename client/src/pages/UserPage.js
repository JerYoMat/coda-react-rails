import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { saveUser } from '../actions';
import Grid from "@material-ui/core/Grid";
import CustomFieldContainer from '../components/userCustomization/CustomFieldContainer';
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fab: {
    position: "sticky",
    bottom: '10px',
    left: '95vw',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
});



const UserPage = ({ classes, user, loading, saveUser, unsavedChanges}) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return (
      <Redirect noThrow from='/users/:userId' to='/' />
    );
  }
  const handleClick = (e) => {
    e.preventDefault()
    saveUser(user)
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={16}
        justify="center"
        direction="row"
        alignItems="center"
      >
        <CustomFieldContainer title={"Income Statement"} statementType="iS" />
        <CustomFieldContainer title={"Balance Sheet"} statementType="bS" />
        <CustomFieldContainer
          title={"Cash Flow Statement"}
          statementType="cF"
        />
      </Grid>
      {unsavedChanges && (
        <Fab className={classes.fab}>
          <SaveIcon onClick={handleClick} />
        </Fab>
      )}
    </React.Fragment>
  );
}


const mapState = state => {
  return ({
    user: state.user,
    loading: state.user.loading,
    saving: state.user.saveInProgress,
    unsavedChanges: state.user.unsavedChanges
  })
}



export default withStyles(styles)(connect(mapState, { saveUser })(UserPage));
