import React, { useEffect, useState } from 'react';
import Pagination from '../pagination';
import ImagesShow from './images_show';

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
                            <p>Go to Image</p>
                        </li>
                    )
                })}
            </ul>
            <Pagination imagesPerPage={imagesPerPage} totalImages={props.images.length} paginate={paginate}/>
        </div>
    );

}

export default ImagesIndex;

