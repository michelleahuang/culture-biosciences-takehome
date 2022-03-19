import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header-div'>
            <div className="header-links">
                <h1>Culture Biosciences</h1>
                <Link to={`/#`}>Back to Index</Link>

            </div>
        </div>
    )
}

export default Header;