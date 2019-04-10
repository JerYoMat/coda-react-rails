import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';

const App = () => {
 
  return (
    <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
      <CompaniesPage path='/companies' />
    </Router>
    </div>
  )
}

export default App;