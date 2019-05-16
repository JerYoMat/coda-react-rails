import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/navbar/Navbar";
import CustomFieldContainer from "../components/userCustomization/CustomFieldContainer";
import Card from "@material-ui/core/Card";

const styles = theme => ({
  root: {
    position: "relative",
    flexGrow: 1,
    maxWidth: 800,
    minWidth: 540,
    marginLeft: "auto",
    marginRight: "auto"
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
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
  },
  favButton: {
    position: "relative",
    float: "right",
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

function getSteps() {
  return [
    "Create an account by clicking Login/Signup",
    "Create a data template (sample)",
    "Add Companies to you Favorites Folder - Click the hamburger menu to acces"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Navbar demo="true" />;
    case 1:
      return (
        <CustomFieldContainer
          title={"Income Statement"}
          statementType="iS"
          demo="true"
        />
      );
    default:
      return "Unknown step";
  }
}

class HomePage extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h3" align="center">
          Welcome to Coda
        </Typography>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {index !== 2 ? (
                    getStepContent(index)
                  ) : (
                    <Card className={classes.card}>
                      <Typography variant="h3">Demo Name</Typography>
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
                          DEMO
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
                          DE
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
                          IND
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
                          SEC
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.favButton}
                        >
                          <AddIcon className={classes.leftIcon} />
                          Add
                        </Button>
                      </div>
                    </Card>
                  )}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                Start searching by typing into the text field in the navbar.
              </Typography>
              <Typography>More Features coming soon!</Typography>
            </Paper>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(HomePage);
