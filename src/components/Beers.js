import React from 'react';

import '../styles/Beers.css';

const Beers = ({beerList}) => {

    const beerCards = beerList.map((beer) =>
        <div className='col-md-3 col-sm-6 col-xs-12'>
            <div className="card text-white bg-dark mb-1 pb-5" id='beer-card'>
                <div className="card-header">{beer.name}</div>
                <div className="card-body">
                    <h6 className="card-title">{beer.brewers_tips}</h6>
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