import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadStatements} from '../actions';
import Statement from '../components/statements/Statement';
import LineChart from '../components/charts/LineChart';
import FavoriteButton from '../components/favorites/FavoriteButton';
import Loading from '../components/misc/Loading';

const CompanyProfilePage = ({ loading, error, company, data, loadStatements, fields }) => {
  if (loading) {
    return (
      <div>
        <Loading />
        <div>Retrieving Data from EDGAR ONLINE ...</div>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (data === undefined || data === {}) {
    useEffect(() => {
        loadStatements(company.id);
      }, [data]
    );
  }
  if (!data) {
    return <div>Combining response with your customizations... </div>
  }

  const years = Object.keys(data)
  const { companyname, primarysymbol, primaryexchange, industry, sector } = company; 
  const [chartFields, setChartFields] = useState('totalrevenue')
  return (
    <div>
      <FavoriteButton companyId={company.id} />
        {companyname}
        {primarysymbol}
        {primaryexchange}
        {industry}
        {sector}
      <button onClick={()=> setChartFields('ebit')} name='ebit'>Show EBIT</button>
      <LineChart years={years} data={data} fieldNames={chartFields} displayName={'Revenue'}/>
      <Statement years={years} fields={fields['iS']} data={data}/>
      <Statement years={years} fields={fields['bS']} data={data}/>
      <Statement years={years} fields={fields['cF']} data={data}/>
    </div>
  )
  
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