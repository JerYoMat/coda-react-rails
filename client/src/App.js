import React from 'react';
import { Router } from '@reach/router';
import TutorialPage from './pages/TutorialPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import UserPage from './pages/UserPage';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';

const App = () => (
  <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
      <TutorialPage path='/tutorial' />
      <CompanyProfilePage path='/companies/:companyId' />
      <UserPage path='/users/:userId' />
    </Router>
  </div>
)


export default App;