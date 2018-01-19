import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Modal from '../modal/modal';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow (photo) {
    this.setState({showModal: true});
  }

  handleHide () {
    this.setState({showModal: false});
  }

  modalView (photo) {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="photo-modal">
          <div>
            Test Modal to cover entire screen
          </div>
          <button onClick={this.handleHide}>Hide Modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div>
        <button onClick={this.handleShow}>Show Modal</button>
        {modal}
      </div>
    );
  }

  render () {
    const photo = this.props.photo;
    return (
      <li className="photo-index-item">
        <div className="photo-item-userbox">
          <div className="user_prof_img">
            <div className="icon-img-box">
              <i className="icon-img fa fa-pagelines fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="user_prof_data">
            <h2><Link to={`/user/${photo.user_id}`} >{photo.username}</Link></h2>
            <Moment className="photo-created-text" fromNow>{photo.created_at}</Moment>
          </div>
        </div>

        //TODO
        <div onClick={this.handleShow(photo)} className="photo-item-imagebox">
          <img src={photo.img_url} alt="test image" />
        </div>
        <div className="photo-item-infobox">
          <h3>{photo.title}</h3>
          <h4>{photo.description}</h4>
        </div>
    </li>
    );
  }
}

export default PhotoIndexItem;
// adding in a modal
// create a special component that will become a full page view
// for a full page photo, it needs to get the data of the photo and user
// the outermost div can be half opaque and handles an outside click to close
// the next inner div becomes the container box for the whole thing
// two options, could make a general "full page" modal that then plugs in
// a separate set of components based on need
// full page model, then build a container?

// <h2><Link to={`/user/${photo.user_id}`} >{photo.username}</Link></h2>
//<img src={photo.profile_img_url} />
