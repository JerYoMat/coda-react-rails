import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import CustomFieldEditTable from '../components/userCustomization/CustomFieldEditTable';

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
    <div>Future User Page</div>
  )
}

const mapState = (state, ownProps) => {
  return ({
    user: state.user.info,
    loading: state.user.loading,
    userFields: state.user.customFields
  })
}


export default connect(mapState)(UserPage);
