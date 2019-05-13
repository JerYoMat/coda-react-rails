import React from 'react';
import StatementRow from './sub-components/StatementRow';
import StatementHeader from './sub-components/StatementHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    padding: 'dense'
  },
});


const Statement = ({classes, fields, data, years}) => {
  //modify fields to dump inputs not in user setting
  let userFields = {...fields} 
  Object.keys(userFields).forEach(key => {
    if (!userFields[key][1]) delete userFields[key]
  })
  return (
    <Paper className={classes.root}>
      <Table>
        <StatementHeader years={years} />
        <TableBody>
          {
            Object.keys(userFields).map((key) => (
              <StatementRow key={key} field={userFields[key]} years={years} data={data} fieldKey={key}/> 
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  )   
}
export default withStyles(styles)(Statement);
