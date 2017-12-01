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

  changeFollowButton (following) {

    const bText = following ? "Unfollow" : "Follow";
    if (this.props.userId == this.props.currentUserId) {
      return(<div></div>);
    } else if (following) {
      return (
        <button onClick={() => this.props.unFollowUser(this.props.userId)}>{bText}</button>
      );
    } else {
      return (
      <button onClick={() => this.props.followUser(this.props.userId)}>{bText}</button>
      );
    }
  }


  render () {

    if (!this.props.user) {
      return (<div>One moment, please</div>);
    }


    let user  = this.props.user;
    let photoCount = user.user_photos.length;


    let following = user.fans.includes(this.props.currentUserId);

    return (
      <div className="topbox-wrapper">
        <div className="topbox">
          <img className="profile-splash-img"></img>
        </div>

        <div className="profile-img-container">
          <div className="prof-icon-container">
            <i className="profile-img fa fa-pagelines fa-4x" aria-hidden="true"></i>
          </div>
        </div>


        <div className="profile-user-box">
          <div className="profile-info-username">
            <h3>{user.username}</h3>
          </div>

          <div className="profile-info-stats">
            <div>
              <p>{photoCount} Photos</p>
              <p className="count">{user.followers} Followers</p>
              <p className="count">{user.following} Following</p>
            </div>
          </div>
          <div className="profile-follow-button">
            {this.changeFollowButton(following)}
          </div>
        </div>


        <div className="masonry-view-div">
          <MasonryViewContainer usrphotos={user.user_photos}/>
        </div>

      </div>
    );
  }
}

export default UserProfile;

//  <img className="profile-img" src={user.profile_img_url}/>
