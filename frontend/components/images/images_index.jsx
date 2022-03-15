import React, { useEffect, useState } from 'react';

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

    return (
        <ul>
            {currentImages.map((image, idx) => {
                return <li key={idx}>{image.url}</li>
            })}
        </ul>
    );

}

export default ImagesIndex;

