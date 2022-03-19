import React, { useEffect, useState }  from 'react';

function ImagesShow(props) {

    const [foamType, setfoamType] = useState(props.image.foamType);
    
    useEffect(() => {
        props.fetchImage(props.match.params.id);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        props.updateImage({"id": props.image.id, "foamType": foamType})
    }

    function update(e) {
        setfoamType(e.currentTarget.value);
    }

    return (
        <div>
            <img className="image-show" src={props.image.url}></img>
            <form onSubmit={handleSubmit}>
                <label>Foaming
                    <input type="radio" checked={props.image.foamType === "foaming"} name="option" value="foaming" onClick={update}></input>
                </label>
                <label>Non-Foaming
                    <input type="radio" checked={props.image.foamType === "non-foaming"} name="option" value="non-foaming" onClick={update}></input>
                </label>
                <label>Unclassified
                    <input type="radio" checked={props.image.foamType === "unclassified"} name="option" value="unclassified" onClick={update}></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )

}

export default ImagesShow;