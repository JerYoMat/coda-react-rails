import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { loadStatements} from '../actions';
import StatementContainer from '../components/statements/StatementContainer';
const CompanyProfilePage = ({ loading, error, company, statements, loadStatements }) => {
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;}
  
    if (statements === undefined) {
    useEffect(() => {
      // dispatch an action
    loadStatements(company.primarysymbol);
    }, [statements]);
  }

  return (
    <div className='company-profile-page-wrapper'>
    <div className='company-profile-main-container'>
      <h2>{company.companyname}</h2>
    </div>
    <div className='company-profile-sidebar-container'><StatementContainer statements={statements} company={company}/></div>
  </div>
  )
}
const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return {
    company:state.companies.list.find(el => el.id === companyId),
    statements: state.companies.statements[companyId]
  }
}

export default connect(mapState, { loadStatements })(CompanyProfilePage);