import { connect } from 'react-redux';

import {
  fetchAllPhotos,
  fetchSinglePhoto,
  receiveErrors
} from '../../actions/photo_actions';

import { getPhotosArray, shuffleArray } from '../../reducers/selectors';
import PhotoIndex from './photo_index';

const mapStateToProps = (state, ownProps) => {
  // console.log(entities);
  return ({
    photos: getPhotosArray(state.entities.photos),
    errors: state.errors.photo,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllPhotos: () => dispatch(fetchAllPhotos()),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
