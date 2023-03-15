import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../redux/profile_reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    debugger;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
