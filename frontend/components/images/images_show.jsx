import React, { useEffect, useState }  from 'react';

function ImagesShow(props) {

    useEffect(() => {
        props.fetchImage(props.image.id);
    }, [])

    console.log(props.image);
    return (
        <div>
            {/* {props.image} */}
            {/* <img className="image" src={props.image.url}></img> */}
        </div>
    )

}

export default ImagesShow;