import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';




function renderInputComponent(inputProps) {
  const { classes, inputRef = () => { }, ref, ...other } = inputProps;
  return (
    <TextField
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.companyname, query);
  const parts = parse(suggestion.companyname, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            ),
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value, suggestions) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.companyname.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

function getSuggestionValue(suggestion) {
  return suggestion.companyname;
}

const styles = theme => ({
  root: {
    color: theme.palette.secondary.light,
    width: '100%',
    flexGrow: 1,
  },
  input: {
    color: theme.palette.common.white,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

});

class Search extends React.Component {
  state = {
    single: '',
    suggestions: [],
  };
  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })  => {
    if (this.props.demo !== 'true') {
    const companyId = suggestion.id 
    navigate(`/companies/${companyId}`)
    }
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.companies),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionSelected: this.onSuggestionSelected,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Search companies...',
            value: this.state.single,
            onChange: this.handleChange('single'),
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

const mapState = state => ({
  companies: state.companies.list 
})


export default withStyles(styles)(connect(mapState)(Search));