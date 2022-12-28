import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    // console.log(props)

    return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
