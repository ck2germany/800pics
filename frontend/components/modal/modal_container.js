import { connect } from 'react-redux';

//import all your different modal'd components here
// TODO: maybe get the login as a modal, anything else I can think of
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
