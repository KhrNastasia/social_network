import React from 'react';
import classes from "./Post.module.css";

const Post = (props) =>{

    return(
      <div className={classes.post_around}>
        <div className={classes.post}>
          <img className={classes.img_post} src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png" alt="" />
          <div> <p>{props.message}</p> </div>
        </div> 
        <div>{props.count} likes</div>
      </div>
    );
}

export default Post;