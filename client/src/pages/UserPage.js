import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import CustomFieldContainer from '../components/userCustomization/CustomFieldContainer';

const UserPage = ({ user, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return (
      <Redirect noThrow from='/users/:userId' to='/' />
    );
  }

  return (
    <div className='row'>
      <CustomFieldContainer statementType='iS'/>
      <CustomFieldContainer statementType='bS'/>
      <CustomFieldContainer statementType='cF'/>
    </div>
  )
}

const mapState = state => {
  return ({
    user: state.user.info,
    loading: state.user.loading
  })
}


export default connect(mapState)(UserPage);
