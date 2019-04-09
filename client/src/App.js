import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)



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