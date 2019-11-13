import React from 'react';

import '../styles/Beers.css';

const Beers = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-3 col-sm-6 col-xs-12'>
                    <div className="card text-white bg-dark mb-1 pb-5" id='beer-card'>
                        <div className="card-header">Beer</div>
                        <div className="card-body">
                            <h5 className="card-title">Beer Image</h5>
                            <p className="card-text">Beer Fact</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Beers;