import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


const App = () => {
 
  return (
    <div>
    <Navbar />
    <Router>
      <HomePage path='/' />
    </Router>
    </div>
  )
}

export default App;