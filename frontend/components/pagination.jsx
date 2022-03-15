import React from 'react';

function Pagination( {imagesPerPage, totalImages}) {
    const imageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        imageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {imageNumbers.map(number => 
                    <li key={number} className="page-item">
                        <a href="#" className="page-link">{number}</a>
                    </li>
                )}
            </ul>
        </div>
    )

}

export default Pagination;