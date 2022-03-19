import React, { useEffect, useState, useRef }  from 'react';
import { withRouter } from 'react-router-dom';

function ImagesShow(props) {

    useEffect(() => {
        props.fetchImage(props.match.params.id).then((response)=> setfoamType(response.image.foamType));
    }, [props.match.params.id]);
    
    const [foamType, setfoamType] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        props.updateImage({"id": props.image.id, "foamType": foamType})
    }

    function update(e) {
        setfoamType(e.currentTarget.value);
    }

    function changeImage(type) {
        props.history.push(`/images/${type === "prev" ? props.image.id - 1 : props.image.id + 1}`)
    }

    function useKey(key, cb) {
        const callbackRef = useRef(cb);

        useEffect(() => {
            callbackRef.current = cb;
        })

        useEffect(() => {
            function handle(e) {
                if (e.code === key) {
                    callbackRef.current(e);
                }
            }

            document.addEventListener('keydown', handle);
            return () => document.removeEventListener('keydown', handle)
        }, [key])
    }

    function handleRight() {
        changeImage("next");
    }

    function handleLeft() {
        if (props.image.id !== 1) {
            changeImage("prev");
        }
    }

    useKey("ArrowRight", handleRight)
    useKey("ArrowLeft", handleLeft)

    return (
        <div>
            {new Date(props.image.lastModified).toLocaleString()}
            <div>
                {(props.image.id !== 1) ? <button id="button" onClick={() => changeImage("prev")}>Previous</button> : ""}
                <img className="image-show" src={props.image.url}></img>
                <button onClick={() => changeImage("next")}>Next</button>
            </div>
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
