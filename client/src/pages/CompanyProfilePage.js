import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { loadStatements } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Statement from '../components/statements/Statement';
import LineChart from '../components/charts/LineChart';
import FavoriteButton from '../components/favorites/FavoriteButton';
import Loading from '../components/misc/Loading';
import Grid from '@material-ui/core/Grid';
import NotFoundPage from './NotFoundPage';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CompanyProfilePage extends Component {
  componentDidMount() {
    const { data, company, loadStatements  } = this.props
    console.log(data)
    console.log(company)
    if (!data) {
      loadStatements(company.id)
    }
  }
  componentDidUpdate(prevProps) {
    const { company, data, loadStatements } = this.props
    if (!data) {
     loadStatements(company.id)
    }
  }
  render() {
    const { classes, company, data, fields, loading, error} = this.props
    if (loading || !data) {
      return (
        <div>
          <Loading />
          <div>Retrieving Data from EDGAR ONLINE ...</div>
        </div>
      );
    }
    if (!company) {
      return <NotFoundPage />;
    }
    if (error) {
      return <div>Error: {error.message}</div>
    }
    const years = Object.keys(data)
    const { companyname, primarysymbol, primaryexchange, industry, sector } = company; 
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
            <Grid item xl={9} lg={10} md={11} s={12} xs={12} >
              <LineChart years={years} data={data} fieldNames={'totalrevenue'} displayName={'Revenue'}/>
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
const mapDispatch = { 
  loadStatements
}

export default withStyles(styles)(connect(mapState, mapDispatch)(CompanyProfilePage));