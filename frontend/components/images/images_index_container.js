import { connect } from 'react-redux';
import ImagesIndex from './images_index';
import { fetchAllImages } from '../../actions/image_actions';

const mapStateToProps = (state) => {
    return {
        images: Object.values(state.entities.images)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllImages: () => dispatch(fetchAllImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesIndex);