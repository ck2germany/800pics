import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => {

  return (
    <li className="photo-index-item">
      <div className="photo-item-userbox">
        <div className="user_prof_img">
          <img src={photo.profile_img_url} />
        </div>
        <div className="user_prof_data">
          <h2><Link to={`/user/${photo.user_id}`} >{photo.username}</Link></h2>
          <h4>Placeholder for extra info</h4>
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
