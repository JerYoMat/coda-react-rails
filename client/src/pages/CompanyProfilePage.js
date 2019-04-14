import React from 'react';
import { connect } from 'react-redux';

const CompanyProfilePage = ({ companyId, company }) => {
  return (
    <div>
    <div>{companyId}</div>
    <div>{company.companyname}</div>
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