import React from 'react';

const PhotoIndexItem = ({photo}) => {
  console.log(photo);
  return (
    <li className="photo-index-item">
      <div className="photo-item-userbox">
        <h2>{photo.username}</h2>
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
