import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header.js';
import Filters from './components/Filters.js';
import Beers from './components/Beers.js';
import Pagination from './components/Pagination.js';

import './App.css';

const App = () => {

  const [beerList, getBeers] = useState([]);
  const [page, currentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`);
      getBeers(res.data);
    };

    fetchPosts();
  });

  const prevPage = () => {
    page > 1 ? currentPage(page - 1) : currentPage(1);
  }

  const nextPage = () => {
    currentPage(page + 1);
    console.log(page);
  }

  return (
    <div className='App'>
      <Header />
      <div className='container' id='middle-container'>
        <Filters />
        <Beers beerList={beerList}/>
        <Pagination prevPage ={prevPage} nextPage={nextPage}/>
      </div>
    </div>
  )
}

export default App;