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

  changeFollow (oldBool) {

  }

  followButton (followedByCurrentUser) {
    if (this.props.userId === this.props.currentUserId) {
      return (<div>Self</div>);
    } else {
      let buttonText = followedByCurrentUser ? "Following" : "Follow";
      return (<button onClick={this.changeFollow(followedByCurrentUser)} className={buttonText}> {buttonText}</button>);
    }
  }


  render () {
    if (!this.props.user) {
      return (<div>One moment, please</div>);
    }

    let user  = this.props.user;
    let photoCount = user.user_photos.length;
    console.log(`current user follows is ${user.followed_by_current_user}`);
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
            {this.followButton(user.followed_by_current_user)}
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
