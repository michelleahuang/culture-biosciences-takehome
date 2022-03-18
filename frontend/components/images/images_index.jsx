import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../pagination';

function ImagesIndex(props) {

    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(100);

    useEffect(() => {
        props.fetchAllImages();
    }, [])

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = props.images.slice(indexOfFirstImage, indexOfLastImage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="index-container">
            <ul className="image-grid" >
                {currentImages.map((image, idx) => {
                    return (
                        <li key={idx}>
                            <img className="image" src={image.url}></img>
                            <Link to={`/images/${image.id}`}>Go to Image</Link>
                        </li>
                    )
                })}
            </ul>
            <Pagination imagesPerPage={imagesPerPage} totalImages={props.images.length} paginate={paginate}/>
        </div>
    );

}

export default ImagesIndex;

