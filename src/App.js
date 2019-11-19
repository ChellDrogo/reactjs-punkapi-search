import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header.js';
import Filters from './components/Filters.js';
import Beers from './components/Beers.js';
import Pagination from './components/Pagination.js';
import Spinner from './components/Spinner.js';

import './App.css';

const App = () => {

  const [beerList, getBeers] = useState([]);
  const [page, currentPage] = useState(1);
  const [search, beerSearched] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPagination, setPagination] = useState(true);
  
  let PUNK_API = `https://api.punkapi.com/v2/beers`;

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
    if (page > 1){
      setLoading(false);
      currentPage(page - 1)
    }
  }

  const nextPage = () => {
    if (page < 13) {
      setLoading(false);
      currentPage(page + 1)
    }
  };
  
  const beerInput = (event) => {
    beerSearched(event.target.value);
  }

  const findBeer = () => { 
    setLoading(false);
    let beerName = `?beer_name=${search}`;
    let URL;
    if (search !== ''){
      URL = PUNK_API + beerName;
      setPagination(false);
    } else {
      URL = PUNK_API;
      setPagination(true);
    }
        
    const fetchPosts = async () => {
      const res = await axios.get(URL);
      getBeers(res.data);
      setLoading(true);
    };

    fetchPosts();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      event.preventDefault();
      findBeer();
    }
  }

  return (
    <div className='App'>
      <Header 
        search={search} 
        beerInput={beerInput}
        findBeer={findBeer}
        handleKeyPress={handleKeyPress}
      />
      <div className='container' id='middle-container'>
        <Filters />
        {loading ? <Beers beerList={beerList}/> : <Spinner/>}
        {showPagination && 
          <Pagination 
            prevPage ={prevPage} 
            nextPage={nextPage}
            page={page}
          />
        }
      </div>
    </div>
  )
}

export default App;