import React, { Component } from 'react';
import { Router } from '@reach/router';
import HomePage from './pages/HomePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar />
          <Router> 
            <HomePage path='/' />
            <LoginPage path='/login' />
            <CompanyProfilePage path='/companies/:companyId' />
            <UserPage path='/users/:userId' />
          </Router>      
    </React.Fragment>
    )
  }
}

export default App;