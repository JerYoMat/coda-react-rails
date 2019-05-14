import React from 'react';
import { Router } from '@reach/router';
import HomePage from './pages/HomePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import UserPage from './pages/UserPage';
import Navbar from './components/navbar/Navbar';


const App = () => (
  <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
      <CompanyProfilePage path='/companies/:companyId' />
      <UserPage path='/users/:userId' />
    </Router>
  </div>
)


export default App;