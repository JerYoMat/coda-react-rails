import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { saveUser } from '../actions';
import CustomFieldContainer from '../components/userCustomization/CustomFieldContainer';


const UserPage = ({ user, loading, saveUser }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return (
      <Redirect noThrow from='/users/:userId' to='/' />
    );
  }
  const handleClick = (e) => {
    e.preventDefault()
    console.log(user)
    saveUser(user)
  }

  return (
    <React.Fragment>
      <CustomFieldContainer statementType='iS'/>
      <CustomFieldContainer statementType='bS'/>
      <CustomFieldContainer statementType='cF'/>
      <button onClick={handleClick}>Save</button>
    </React.Fragment>
  )
}

const mapState = state => {
  return ({
    user: state.user,
    loading: state.user.loading
  })
}



export default connect(mapState, { saveUser })(UserPage);
