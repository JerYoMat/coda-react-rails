import React from 'react';

const Checkbox = ({ name, checked=false, onChange }) => (
  <input className='form-check-input' type='checkbox' name={name} id={name} checked={checked} onChange={onChange} />
);

export default Checkbox;