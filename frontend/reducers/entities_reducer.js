import { combineReducers } from 'redux';
import imagesReducer from './image_reducer';

const entitiesReducer = combineReducers({
    images: imagesReducer
})

export default entitiesReducer;