import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import imagesReducer from '../reducers/image_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(imagesReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;