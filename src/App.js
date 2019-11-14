import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header.js';
import Filters from './components/Filters.js';
import Beers from './components/Beers.js';

import './App.css';

const App = () => {

  const [beerList, getBeers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://api.punkapi.com/v2/beers');
      getBeers(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='container' id='middle-container'>
        <Filters />
        <Beers beerList={beerList}/>
      </div>
    </div>
  )
}

export default App;