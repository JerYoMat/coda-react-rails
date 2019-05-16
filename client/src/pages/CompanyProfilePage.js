import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStatements, loadStockData } from "../actions";
import { withStyles } from "@material-ui/core/styles";
import Statement from "../components/statements/Statement";
import LineChart from "../components/charts/LineChart";
import StockChart from "../components/charts/StockChart";
import FavoriteButton from "../components/favorites/FavoriteButton";
import Loading from "../components/misc/Loading";
import Grid from "@material-ui/core/Grid";
import NotFoundPage from "./NotFoundPage";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const styles = theme => ({
  root: {
    marginTop: "1rem",
    flexGrow: 1
  },
  card: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: "1rem"
  },
  fin: {
    color: theme.palette.primary.light
  },
  market: {
    color: theme.palette.secondary.light
  },
  button: {
    position: "relative",
    float: "right",
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class CompanyProfilePage extends Component {
  componentDidMount() {
    const {
      data,
      company,
      loadStatements,
      loadStockData,
      loading,
      stockData,
      stocksLoading
    } = this.props;
    if (!data && !loading) {
      loadStatements(company.id);
    }
    if (!stockData && !stocksLoading && company) {
      loadStockData(company.id);
    }
  }
  componentDidUpdate(prevProps) {
    const {
      data,
      company,
      loadStatements,
      loading,
      loadStockData,
      stockData,
      stocksLoading
    } = this.props;
    if (!data && !loading) {
      loadStatements(company.id);
    }
    if (!stockData && !stocksLoading && company) {
      loadStockData(company.id);
    }
  }
  render() {
    const {
      classes,
      company,
      data,
      fields,
      loading,
      error,
      stocksLoading,
      stockData
    } = this.props;
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
      return <div>Error: {error.message}</div>;
    }
    const years = Object.keys(data);
    const {
      companyname,
      primarysymbol,
      primaryexchange,
      industry,
      sector
    } = company;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item lg={6} xs={12}>
            <Card className={classes.card}>
              <Typography variant="h3">{companyname}</Typography>
              <div>
                <Typography
                  inline={true}
                  variant="button"
                  className={classes.test}
                >
                  Ticker:{"\u00A0"}
                </Typography>
                <Typography
                  inline={true}
                  variant="subtitle2"
                  className={classes.market}
                >
                  {primarysymbol}
                </Typography>
                <span> | </span>
                <Typography
                  inline={true}
                  variant="button"
                  className={classes.mainText}
                >
                  Exchange:{"\u00A0"}
                </Typography>
                <Typography
                  className={classes.market}
                  inline={true}
                  variant="subtitle2"
                >
                  {primaryexchange}
                </Typography>
              </div>
              <div>
                <Typography
                  inline={true}
                  variant="button"
                  className={classes.test}
                >
                  Industry:{"\u00A0"}
                </Typography>
                <Typography
                  inline={true}
                  variant="subtitle1"
                  className={classes.test}
                >
                  {industry}
                </Typography>
              </div>
              <div>
                <Typography inline={true} variant="button">
                  Sector:{"\u00A0"}
                </Typography>
                <Typography
                  inline={true}
                  variant="subtitle1"
                  className={classes.test}
                >
                  {sector}
                </Typography>
                <FavoriteButton companyId={company.id} />
              </div>
            </Card>
            <Card className={classes.card}>
              <Typography className={classes.fin} variant="subtitle2">
                Income Statement:
              </Typography>
              <Statement years={years} fields={fields["iS"]} data={data} />
            </Card>

            <Card className={classes.card}>
              <Typography className={classes.fin} variant="subtitle2">
                Balance Sheet:
              </Typography>
              <Statement years={years} fields={fields["bS"]} data={data} />
            </Card>

            <Card className={classes.card}>
              <Typography className={classes.fin} variant="subtitle2">
                Cash Flow Statement:
              </Typography>
              <Statement years={years} fields={fields["cF"]} data={data} />
            </Card>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card className={classes.card}>
              <Typography className={classes.market} variant="subtitle2">
                Reporting Trends
              </Typography>
              <LineChart
                years={years}
                data={data}
                fieldNames={"totalrevenue"}
                displayName={"Revenue"}
              />
            </Card>

            {stocksLoading && <Loading />}
            {stockData && (
              <Card className={classes.card}>
                <Typography
                  className={classes.market}
                  variant="subtitle2"
                  color="secondary"
                >
                  Market Data
                </Typography>
                <StockChart
                  data={stockData}
                  ticker={primarysymbol}
                  exchange={primaryexchange}
                />
              </Card>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return {
    company: state.companies.list.find(el => el.id === companyId),
    data: state.companies.statements[companyId],
    fields: state.user.customFields,
    loading: state.companies.loadingStmnt,
    error: state.companies.loadingStmntError,
    stockData: state.companies.stockPrices[companyId],
    stocksLoading: state.companies.stocksLoading
  };
};
const mapDispatch = {
  loadStatements,
  loadStockData
};

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(CompanyProfilePage)
);
