import { connect } from 'react-redux';

//import all your different modal'd components here
import PhotoModal from './photo_modal';

const MODAL_COMPONENTS = {
  'SHOW_PHOTO': PhotoModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType)  return null;
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default connect(
  state => state.modal
)(ModalRoot);
