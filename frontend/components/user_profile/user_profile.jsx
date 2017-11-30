import React from 'react';

import PhotoIndexContainer from '../photo_index/photo_index_container';

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
    return (
      <div>
        <div className="topbox">

        </div>
        <div className="profile-user-box">
          <div className="profile-img-container">
            <img className="profile-img" src={user.profile_img_url}/>
          </div>

          <div className="profile-info-username">
            <h3>{user.username}</h3>
          </div>

          <div className="profile-info-stats">
            <div>
              <p>Follows</p><p className="count">13</p>
            </div>
            <div>
              <p>Followers</p><p className="count">27</p>
            </div>
          </div>

        </div>


        <div>
          <PhotoIndexContainer />
        </div>

      </div>
    );
  }
}

export default UserProfile;
