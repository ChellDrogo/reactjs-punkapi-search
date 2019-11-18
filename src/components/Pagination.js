import React from 'react';

import '../styles/Pagination.css';

const Pagination = ({prevPage, nextPage, page}) => {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-5">
                    <li className="page-item page-link bg-dark text-white" onClick={() => prevPage()}>Previous</li>
                    <li className="page-item page-link bg-dark text-white">{page}</li>
                    <li className="page-item page-link bg-dark text-white" onClick={() => nextPage()}>Next</li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;