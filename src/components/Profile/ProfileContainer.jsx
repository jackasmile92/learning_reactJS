import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';

import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfileInfo(userId).then(response => {
        this.props.setUserProfile(response);
      }
      );
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let withUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlData);