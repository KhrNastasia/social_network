import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // console.log()
    // console.log(props);
    return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts.postsData}
               newPostText={props.posts.newPostText}
               updatePostText={props.updatePost}
               addNewPost={props.addPost}/>
    </div>
  );
};

export default Profile;
