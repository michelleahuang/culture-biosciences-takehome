import { RECEIVE_ALL_IMAGES, RECEIVE_IMAGE } from '../actions/image_actions.js';

const imagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_IMAGES:
            return action.images;
        case RECEIVE_IMAGE:
            return action.image;
        default:
            return oldState;
    }
}

export default imagesReducer;