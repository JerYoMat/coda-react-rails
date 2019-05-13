import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadStatements} from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Statement from '../components/statements/Statement';
import LineChart from '../components/charts/LineChart';
import FavoriteButton from '../components/favorites/FavoriteButton';
import Loading from '../components/misc/Loading';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


const CompanyProfilePage = ({ classes, loading, error, company, data, loadStatements, fields }) => {
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
    <div className={classes.root}>
      <Grid container 
        direction="row"
        justify="center"
        
        spacing={24}
      >
        <Grid item xl={9} lg={10} md={10} s={12} xs={12}> 
          <FavoriteButton companyId={company.id} />
            {companyname}
            {primarysymbol}
            {primaryexchange}
            {industry}
            {sector}
          <button onClick={()=> setChartFields('ebit')} name='ebit'>Show EBIT</button>
          <Grid item xl={9} lg={10} md={11} s={12} xs={12} >
            <LineChart years={years} data={data} fieldNames={chartFields} displayName={'Revenue'}/>
          </Grid>
          <Grid item xl={9} lg={10} md={11} s={12} xs={12} >
          <Statement years={years} fields={fields['iS']} data={data}/>
          </Grid>
          <Grid item xl={9} lg={10} md={11} s={12} xs={12} >
            <Statement years={years} fields={fields['bS']} data={data}/>
          </Grid>
          <Grid item xl={9} lg={10} md={11} s={12} xs={12} >
            <Statement years={years} fields={fields['cF']} data={data}/>
          </Grid>
        </Grid>
      </Grid>
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

export default withStyles(styles)(connect(mapState, { loadStatements })(CompanyProfilePage));