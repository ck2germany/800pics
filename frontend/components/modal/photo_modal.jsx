

import { hideModal } from '../../../actions/modal_actions';

const PhotoModal = (props, dispatch) => {
  return (
    <div className="photo_modal">
      <button onClick={() => dispatch(hideModal())}>
        Close
      </button>
    </div>
  );
};

export default PhotoModal;
