import React from 'react';
import { connect } from 'react-redux'
import { loadStatements } from '../../actions';
import Table from './sub-components/Table';
//need to pass in company ticker as prop along with loading, error and statementData
class StatementContainer extends React.Component{
  componentDidMount() {
    this.props.dispatch(loadStatements(this.props.ticker));
  }

  render() {
    const { error, loading, statements } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='financial-statements-container'>
        <Table title="Income Statement"  numColumns={3}/>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  statements: state.periodData.statements[ownProps.companyId],
  loading: state.periodData.loadingStmnt,
  error: state.periodData.loadingStmntError
})


export default connect(mapState)(StatementContainer);