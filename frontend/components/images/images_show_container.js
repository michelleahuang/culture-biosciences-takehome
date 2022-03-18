import { connect } from 'react-redux';
import ImagesShow from './images_show';
import { fetchImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        image: state.entities.images[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImage: (id) => dispatch(fetchImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesShow);