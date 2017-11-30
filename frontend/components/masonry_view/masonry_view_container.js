import { connect } from 'react-redux';
import {
  fetchAllPhotos,
  fetchSinglePhoto,
  receiveErrors
} from '../../actions/photo_actions';

import { getPhotosArray } from '../../reducers/selectors';

import MasonryView from './masonry_view';

const mapStateToProps = (state, ownProps) => {
  return ({
    photos: getPhotosArray(state.entities),
    errors: state.errors.photo,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllPhotos: () => dispatch(fetchAllPhotos()),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(MasonryView);
