import React, { useEffect, useState }  from 'react';

function ImagesShow(props) {

    useEffect(() => {
        props.fetchImage(props.match.params.id).then((response)=> setfoamType(response.image.foamType));
    }, []);
    
    const [foamType, setfoamType] = useState("");
    
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
                    <input type="radio" checked={foamType === 'foaming'} name="option" value="foaming" onChange={update}></input>
                </label>
                <label>Non-Foaming
                    <input type="radio" checked={foamType === 'non-foaming'} name="option" value="non-foaming" onChange={update}></input>
                </label>
                <label>Unclassified
                    <input type="radio" checked={foamType === 'unclassified'} name="option" value="unclassified" onChange={update}></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )

}

export default ImagesShow;