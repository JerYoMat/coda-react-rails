import React from 'react';
import './App.css';
import Card from './components/Card';


const App = () => {
  const heading = "View Financial Data"
  const contentArray = ["Includes Financial Data for over 5000 public companies", "See changes in over time", "Choose your own ratios" ]
  return (
    <Card heading={heading} contentArray={contentArray}/>
  )
}

export default App;