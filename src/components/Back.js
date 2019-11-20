import React from 'react';

const Back = () => {
    return (
        <div className='mt-5'>
            <button type="button" className="btn btn-dark" onClick={() => window.location.reload()}>Back</button>
        </div>
    )
}

export default Back;