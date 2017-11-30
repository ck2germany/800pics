import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const PhotoIndexItem = ({photo}) => {

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
      <div className="photo-item-imagebox">
        <img src={photo.img_url} alt="test image" />
      </div>
      <div className="photo-item-infobox">
        <h3>{photo.title}</h3>
        <h4>{photo.description}</h4>
      </div>
  </li>
  );
};

export default PhotoIndexItem;


// <h2><Link to={`/user/${photo.user_id}`} >{photo.username}</Link></h2>
//<img src={photo.profile_img_url} />
