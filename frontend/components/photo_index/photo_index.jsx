import React from 'react';
import { Link } from 'react-router-dom';

import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {

    this.props.getAllPhotos();
  }


  render () {

    let photoArr;
    if (this.props.photos[0]) {
      photoArr = this.props.photos;

    }


    if (!photoArr) {
      return (<div>Loading...</div>);
    }



    return (
      <div>
        <ul>
          {
            photoArr.map(photo => <PhotoIndexItem
              photo={photo}
              key={`photo-${photo.id}`} />)
          }
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
