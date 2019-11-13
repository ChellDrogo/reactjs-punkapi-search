import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Punk API</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='mr-auto'></div>
                    <ul className="navbar-nav mr-5">
                    <li className="nav-item">
                        <a className="nav-link" href="#">GET RANDOM BEER <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="NOTHING BUT BEER..." aria-label="Search"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Beer Me</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;