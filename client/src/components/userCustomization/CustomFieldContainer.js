import React from 'react';
import { connect } from 'react-redux';
import { changeLocalField} from '../../actions';
import SingleCheckbox from './SingleCheckbox';
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  
  paper: {
    display: 'flex',
    minWidth: 425,
    maxWidth: 500,
    height: 700,
    padding: theme.spacing.unit * 2,
    margin: 16
  },
  typography: {
    color: theme.palette.secondary.light
  }
});

const CustomFieldContainer = ( { classes, customFields,  statementType, changeLocalField, title, saveUser }) => {
  const handleChange = (e) => {
    const statement = statementType
    const field = e.target.id
    const value = e.target.checked 
    changeLocalField(statement, field, value)
  }

  return (
   
      <Paper className={classes.paper}>
        <form>
          <FormControl>
            <FormLabel>
              <Typography variant="h6" className={classes.typography}>
                {title}
              </Typography>
            </FormLabel>
            <FormGroup>
              {Object.keys(customFields).map((keyName, keyIndex) => (
                <SingleCheckbox
                  key={keyIndex}
                  statementType={statementType}
                  name={keyName}
                  checked={customFields[keyName][1]}
                  onChange={handleChange}
                  displayName={customFields[keyName][0]}
                />
              ))}
            </FormGroup>
          </FormControl>
        </form>
      </Paper>)
   
}

const mapState = (state, ownProps) => {
  const statementType = ownProps.statementType
  return {
    statementType: statementType,
    customFields: state.user.customFields[statementType]
  }
}
const mapDispatch = { changeLocalField }

export default withStyles(styles)(connect(mapState, mapDispatch)(CustomFieldContainer));
