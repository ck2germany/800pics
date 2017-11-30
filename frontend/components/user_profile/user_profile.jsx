import React from 'react';


import PhotoIndexContainer from '../photo_index/photo_index_container';
import MasonryViewContainer from '../masonry_view/masonry_view_container';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () {
    this.props.getUsrInfo(this.props.userId);

  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params !== newProps.match.params){
      this.props.getUsrInfo(newProps.userId);
    }
  }


  render () {
    if (!this.props.users[this.props.userId]) {
      return (<div>One moment, please</div>);
    }

    let user = this.props.users[this.props.userId];
    let photoCount = this.props.user.user_photos.length;
    return (
      <div>
        <div className="topbox">
          <img className="profile-splash-img"></img>
        </div>

        <div className="profile-img-container">
          <img className="profile-img" src={user.profile_img_url}/>
        </div>

        <div className="profile-user-box">
          <div className="profile-info-username">
            <h3>{user.username}</h3>
          </div>

          <div className="profile-info-stats">
              <p>{photoCount} Photos</p>
              <p className="count">13 Followers</p>
              <p className="count">27 Following</p>
          </div>

        </div>


        <div className="masonry-view-div">
          <MasonryViewContainer usrphotos={this.props.user.user_photos}/>
        </div>

      </div>
    );
  }
}

export default UserProfile;
