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
          <Table title={"Income Statement"} statement={statements.IS} fiscalYears={statements.info['fiscalyear']}/>
          <Table title={"Balance Sheet"} statement={statements.BS} fiscalYears={statements.info['fiscalyear']}/>
          <Table title={"Cash Flow Statement"} statement={statements.CF} fiscalYears={statements.info['fiscalyear']}/>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  statements: state.companies.statements[ownProps.companyId],
  loading: state.companies.loadingStmnt,
  error: state.companies.loadingStmntError
})


export default connect(mapState)(StatementContainer);