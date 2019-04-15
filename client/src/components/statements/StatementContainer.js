import React from 'react';
import { connect } from 'react-redux'
import { loadStatements } from '../../actions';

//need to pass in company ticker as prop along with loading, error and statementData
class StatementContainer extends React.Component{
  componentDidMount() {
    this.props.dispatch(loadStatements(this.props.ticker));
  }

  render() {
    const { error, loading, fins } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='financial-statements-container'>

      </div>
    );
  }
}

const mapState = state => ({
  incomeStatement: state.periodData.statements.IS,
  balanceSheet: state.periodData.statements.BS,
  cashFlow: state.periodData.statements.CF,
  info: state.periodData.statements.info,
  loading: state.periodData.loadingStmnt,
  error: state.periodData.loadingStmntError
})


export default connect(mapState)(StatementContainer);