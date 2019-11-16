import React from 'react';

import '../styles/Beers.css';

const Beers = ({beerList}) => {

    const beerCards = beerList.map((beer) =>
        <div className='col-md-3 col-sm-6 col-xs-12 m-1'>
            <div className="card h-100 rounded" id='beer-card'>
                <div className="card-header bg-dark text-white">{beer.name}</div>
                <div className="card-body bg-light">
                    <img className="card-img-top" id='card-imgs' src={beer.image_url}/>
                    <p className="card-text">{beer.tagline}</p>
                </div>
            </div>
        </div>
    );
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                 {beerCards}
            </div>
        </div>
    )
}

export default Beers;