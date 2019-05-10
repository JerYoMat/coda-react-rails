import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './SaveBar.scss'

const SaveBar = ({ saveInProgress, unsavedChanges }) => {
  if (saveInProgress) {
    return <div className='saving-active'>Syncing your new settings with the server...</div>
  }
 
  return <div className='savebar-inactive'>test</div>
}

const mapState = state => ({
  saveInProgress: state.user.saveInProgress,
  unsavedChanges: state.user.unsavedChanges
})



export default connect(mapState)(SaveBar);