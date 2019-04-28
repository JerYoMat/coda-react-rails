import React, { Component } from 'react';
import './App.scss'
import { Router } from '@reach/router';
import HomePage from './pages/HomePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import UserPage from './pages/UserPage';
import LoginCreateUser from './components/loginCreateUser/LoginCreateUser'; 
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <div className='row'>
      <div className='col-xl-2'></div>
        <div className='col-xl-8'>
          <Router> 
            <HomePage path='/' />
            <LoginCreateUser path='/login' />
            <CompanyProfilePage path='/companies/:companyId' />
            <UserPage path='/users/:userId' />
          </Router>
        </div>
      <div className='col-xl-2'></div>
      </div>
    </div>
    )
  }
}

export default App;