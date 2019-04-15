import React from 'react';
import { connect } from 'react-redux';
import './CompanyProfilePage.scss'
import StatementContainer from '../components/statements/StatementContainer';
const CompanyProfilePage = ({ companyId, company }) => {
  
  return (
    <div className='company-profile-page-wrapper'>
    <div className='company-profile-main-container'>
      <div>{company.companyname}</div>
    </div>
    <div className='company-profile-sidebar-container'><StatementContainer companyId={company.id} ticker={company.primarysymbol}/></div>
  </div>
  )
}
const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return {
    company:state.companies.list.find(el => el.id === companyId) 
  }
}

export default connect(mapState)(CompanyProfilePage);