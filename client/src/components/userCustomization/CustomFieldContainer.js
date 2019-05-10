import React from 'react';
import { connect } from 'react-redux';
import { changeLocalField} from '../../actions';
import Checkbox from './Checkbox';


const CustomFieldContainer = ( { customFields,  statementType, changeLocalField }) => {
  const handleChange = (e) => {
    const statement = statementType
    const field = e.target.id
    const value = e.target.checked 
    changeLocalField(statement, field, value)
  }

  return (
    <div className='card col-md-4'>
    <form>
      {
        Object.keys(customFields).map((keyName, keyIndex) => (
          <div key={keyIndex} className='form-check'>
            <Checkbox statementType={statementType} name={keyName} checked={customFields[keyName][1]} onChange={handleChange} />
            <label>
              {customFields[keyName][0]}
            </label>
          </div>
        ))
      }
    </form>
    </div>
  );
}

const mapState = (state, ownProps) => {
  const statementType = ownProps.statementType
  return {
    statementType: statementType,
    customFields: state.user.customFields[statementType]
  }
}
const mapDispatch = { changeLocalField }

export default connect(mapState, mapDispatch)(CustomFieldContainer);
