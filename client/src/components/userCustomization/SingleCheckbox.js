import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SingleCheckbox = ({ name, checked=false, onChange, displayName }) => (
  <FormControlLabel
    control={
      <Checkbox
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        value={name}
      />
    }
    label={displayName}
  />
);

export default SingleCheckbox;

