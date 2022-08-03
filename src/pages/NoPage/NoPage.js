import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
        <div className='container p-5 d-flex align-items-center justify-content-center'>
            <div className="nopage-in">
                <h1>Page Not Found</h1>
                <div className="text-center">
                    <Link to='/' className="btn btn-info">Go to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NoPage