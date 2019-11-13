import React from 'react'

const Filters = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm mt-3">
                    <div className="input-group">
                    <input className="form-control" type="search" placeholder="ABV" aria-label="Search"/>
                        <div className="input-group-append">
                        <button className="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MORE OR LESS</button>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">MORE</div>
                                <div className="dropdown-item">LESS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm mt-3">
                    <div className="input-group">
                    <input className="form-control" type="search" placeholder="IBU" aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MORE OR LESS</button>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">MORE</div>
                                <div className="dropdown-item">LESS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm mt-3">
                    <button type="button" className="btn btn-danger">RESET</button>
                </div>
            </div>
        </div>
    )
}

export default Filters;
