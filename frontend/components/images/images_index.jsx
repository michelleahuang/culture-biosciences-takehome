import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../pagination';

function ImagesIndex(props) {

    const [foamType, setfoamType] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(100);
    const [allImages, setAllImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        props.fetchAllImages().then((res) => {
            const images = Object.values(res.images);
            setAllImages(images);
            setFilteredImages(images);
        });
    }, [])
    
    useEffect(() => {
        filter();
    }, [foamType]);

    function filterType(e) {
        setfoamType(e.target.value);
    }

    function filter() {
        if (foamType !== 'all') {
            setFilteredImages(allImages.filter(image => image.foamType === foamType));
        } else {
            setFilteredImages(allImages);
        }
    }

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <select onChange={filterType}>
                <option value="all" onChange={filterType}>All</option>
                <option value="foaming" onChange={filterType}>Foaming</option>
                <option value="non-foaming" onChange={filterType}>Non-Foaming</option>
                <option value="unclassified" onChange={filterType}>Unclassified</option>
            </select>
            <div className="index-container">
                <ul className="image-grid" >
                    {currentImages.map((image, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={`/images/${image.id}`}>
                                    <img className={image.foamType === "unclassified" ? "u-image" : "image"} src={image.url}></img>
                                </Link>
                                {image.foamType[0].toUpperCase() + image.foamType.slice(1)}
                                <br/>
                                {new Date(image.lastModified).toLocaleString()}
                            </li>
                        )
                    })}
                </ul>
                <Pagination imagesPerPage={imagesPerPage} totalImages={filteredImages.length} paginate={paginate}/>
            </div>
        </>
    );

}

export default ImagesIndex;

