import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
const App = () => {
 
  return (
    <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
      <CompaniesPage path='/companies' />
      <CompanyProfilePage path='/companies/:id' />
    </Router>
    </div>
  )
}

export default App;