import { connect } from 'react-redux';
import ImagesShow from './images_show';
import { fetchImage, updateImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
    return {
        image: state.entities.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImage: (id) => dispatch(fetchImage(id)),
        updateImage: (image) => dispatch(updateImage(image))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesShow);