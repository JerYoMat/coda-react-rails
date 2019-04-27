import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyProfilePage from './pages/CompanyProfilePage';

const App = () => {
  return (
    <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
      <CompanyProfilePage path='/companies/:companyId' />
    </Router>
    </div>
  )
}

export default App;