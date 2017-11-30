import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    // gutter: 8,
    // columnWidth: '.masonry-grid-item',
    // percentPosition: true
};
// const style = {
//   display: 'flex'
//
//
// };
class MasonryView extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.getAllPhotos();
  }


  render () {
    let photoArr;
    console.log(this.props);

    if (this.props.usrphotos[0]) {
      photoArr = this.props.usrphotos;
    }

    if (!photoArr) {
      return (<div>Loading...</div>);
    }

    let pArr = photoArr.slice(0,20);

    const childElements = pArr.map(function(photo){
       return (
            <div className="masonry-grid-item" key={`mason-${photo.id}`}>
                <img src={photo.img_url} />
            </div>
        );
    });

    return (
        <Masonry
            className={'masonry-grid'}
            elementType={'div'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
        >
            {childElements}
        </Masonry>
    );
  }
}

export default MasonryView;
