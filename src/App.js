import React from 'react';

import Header from './components/Header.js';
import Filters from './components/Filters.js';
import Beers from './components/Beers.js';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='container' id='middle-container'>
        <Filters />
        <Beers />
      </div>
    </div>
  )
}

export default App;