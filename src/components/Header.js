import React from 'react';

import '../styles/Header.css';

const Header = ({search, beerInput, findBeer, handleKeyPress}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand ml-4" id='api-header' onClick={() => window.location.reload()} >Punk API</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='mr-auto'></div>
                    <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="SEARCH BY BEER" 
                        aria-label="Search" 
                        value={search} 
                        onChange={(event) => beerInput(event)}
                        onKeyPress={(event) => handleKeyPress(event)}
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={() => findBeer()}>Beer Me</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;