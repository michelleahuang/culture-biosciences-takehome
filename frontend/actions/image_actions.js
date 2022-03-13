import * as ImageApiUtil from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

const receiveAllImages = (images) => {
    return {
        type: RECEIVE_ALL_IMAGES,
        images
    }
}

const receiveImage = (image) => {
    return {
        type: RECEIVE_IMAGE,
        image
    }
}

export const fetchAllImages = () => (dispatch) => {
    return ImageApiUtil.fetchAllImages()
        .then(images => dispatch(receiveAllImages(images)))
}

export const fetchImage = (id) => (dispatch) => {
    return ImageApiUtil.fetchImage(id)
        .then(image => dispatch(receiveImage(image)))
}

export const updateImage = (image) => (dispatch) => {
    return ImageApiUtil.updateImage(image)
        .then(image => dispatch(receiveImage(image)))
}