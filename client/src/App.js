import React, { Component } from 'react';
import './App.scss'
import { Router } from '@reach/router';
import HomePage from './pages/HomePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <div className='row'>
      <div className='col-xl-2 p-0'></div>
        <div className='col-xl-8 p-0'>
          <Router> 
            <HomePage path='/' />
            <LoginPage path='/login' />
            <CompanyProfilePage path='/companies/:companyId' />
            <UserPage path='/users/:userId' />
          </Router>
        </div>
      <div className='col-xl-2 p-0'></div>
      </div>
    </div>
    )
  }
}

export default App;