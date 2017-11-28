import { connect } from 'react-redux';

import { fetchAllPhotos, fetchSinglePhoto } from '../../actions/photo_actions';
import Main from './main';

const mapStateToProps = ({ entities }, ownProps) => {
  
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
