import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { loadStatements} from '../actions';
import Statement from '../components/statements/Statement';

const CompanyProfilePage = ({ loading, error, company, data, loadStatements, fields }) => {
  if (loading) {
    return <div>Retrieving Data from EDGAR ONLINE ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;}
  
  if (data === undefined || data === {}) {
    useEffect(() => {
        loadStatements(company.id);
      }, [data]
    );
  }
  if (data) {
    const years = Object.keys(data)
    return (
      <div>
      <Statement years={years} fields={fields['iS']} data={data}/>
      <Statement years={years} fields={fields['bS']} data={data}/>
      <Statement years={years} fields={fields['cF']} data={data}/>
      </div>
    )
  }
  return <div>Combining response with your customizations... </div>
  
}
const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return {
    company:state.companies.list.find(el => el.id === companyId),
    data: state.companies.statements[companyId],
    fields: state.user.customFields,
    loading: state.companies.loadingStmnt,
    error: state.companies.loadingStmntError
  }
}

export default connect(mapState, { loadStatements })(CompanyProfilePage);