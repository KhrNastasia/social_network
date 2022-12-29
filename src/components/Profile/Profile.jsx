import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // console.log()

    return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts.postsData}/>
    </div>
  );
};

export default Profile;
