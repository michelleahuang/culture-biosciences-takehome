import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header-div'>
            <div className="header-links">
                <img className="logo" src={logo}></img>
                <Link to={`/#`}>Back to Index</Link>

            </div>
        </div>
    )
}

export default Header;