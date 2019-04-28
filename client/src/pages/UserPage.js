import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';


const UserPage = ({ user, loading, favorites }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return (
      <Redirect noThrow from="/users/:userId" to="/login" />
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
    favorites: state.user.favorites
  })
}


export default connect(mapState)(UserPage);
