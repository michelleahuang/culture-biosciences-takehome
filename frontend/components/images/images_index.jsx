import React, { useEffect } from 'react';

const ImagesIndex = (props) => {

    useEffect(() => {
        props.fetchAllImages();
    }, [])

    return (

        <ul>
            {props.images.map((image, idx) => {
                return <li key={idx}>{image.url}</li>
            })}
        </ul>
    );

}

export default ImagesIndex;

