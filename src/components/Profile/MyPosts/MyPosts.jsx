import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    console.log(props.posts)
    let postEl = props.posts.postsData.map(p => <Post key={p.id} message={p.msg} count={p.count}/>);
    return (
        <div className={classes.posts}>
            <p className={classes.post}>New post</p>
            <textarea name="" id="" cols="" rows="7" defaultValue={'Write here something'}></textarea><br/>
            <button>Add</button>
            <p className={classes.post}>My posts</p>
            {postEl}
        </div>
    );
}

export default MyPosts;