import React, { Component } from 'react';

//expects to be passed current user settings as props
class CustomFieldEditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statementFields: this.props.currentSettings
    }
  }
  handleSubmit = () => {
    
  }

  render () {
    return (
      <form>

      </form>
    )
  
  }
}
export default CustomFieldEditTable;