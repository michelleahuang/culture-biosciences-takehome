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

        // for each render, updating the callbackRef's current value to the callback
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
        }, [key]) // add key as dependency to ensure that if the key changes, useEffect runs
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
        <div className="show-container">
            <p>{new Date(props.image.lastModified).toLocaleString()}</p>
            <div className="image-container">
                {(props.image.id !== 1) ? <button id="button" onClick={() => changeImage("prev")}>PREVIOUS</button> : ""}
                <img className="image-show" src={props.image.url}></img>
                <button onClick={() => changeImage("next")}>NEXT</button>
            </div>
            <div className="foaming-options">
                <form onSubmit={handleSubmit}>
                    <label className="label">Foaming
                        <input type="radio" checked={foamType === 'foaming'} name="option" value="foaming" onChange={update}></input>
                    </label>
                    <label>Non-Foaming
                        <input type="radio" checked={foamType === 'non-foaming'} name="option" value="non-foaming" onChange={update}></input>
                    </label>
                    <label>Unclassified
                        <input type="radio" checked={foamType === 'unclassified'} name="option" value="unclassified" onChange={update}></input>
                    </label>
                    <input className="submit" type="submit"></input>
                </form>
            </div>
        </div>
    )

}

export default ImagesShow;
