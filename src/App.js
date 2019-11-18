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
  const [search, beerSearched] = useState('');
  const [loading, setLoading] = useState(false);
  
  let PUNK_API = `https://api.punkapi.com/v2/beers`;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(PUNK_API);
      getBeers(res.data);
      setLoading(true);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let pageNumber = `?page=${page}`;
    const fetchPosts = async () => {
      const res = await axios.get(PUNK_API + pageNumber);
      getBeers(res.data);
      setLoading(true);
    };

    fetchPosts();
  }, [page]);

  const prevPage = () => {
    setLoading(false);
    page > 1 ? currentPage(page - 1) : currentPage(1);
  }

  const nextPage = () => {
    setLoading(false);
    currentPage(page + 1);
  };
  
  const beerInput = (event) => {
    beerSearched(event.target.value);
  }

  const findBeer = () => { 
    setLoading(false);
    let beerName = `?beer_name=${search}`;
    let URL = search !== '' ? PUNK_API + beerName : PUNK_API;
    const fetchPosts = async () => {
      const res = await axios.get(URL);
      getBeers(res.data);
      setLoading(true);
    };

    fetchPosts();
  }

  return (
    <div className='App'>
      <Header 
        search={search} 
        beerInput={beerInput}
        findBeer={findBeer}
      />
      <div className='container' id='middle-container'>
        <Filters />
        <Beers beerList={beerList}/>
        <Pagination 
          prevPage ={prevPage} 
          nextPage={nextPage}
          page={page}
        />
      </div>
    </div>
  )
}

export default App;