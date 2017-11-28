import React from 'react';

const PhotoIndexItem = ({photo}) => {
  console.log(photo);
  return (
    <li className="photo-index-item">
      <div className="photo-item-userbox">
        <h3>Placeholder for Title</h3>
      </div>
      <img src={photo.img_url} alt="test image" />
      <div>
        <div className="photo-item-infobox">Placeholder for details box</div>
      </div>
  </li>
  );
};

export default PhotoIndexItem;
