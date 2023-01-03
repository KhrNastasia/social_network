import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    let postEl = props.posts.map(p => <Post key={p.id} message={p.msg} count={p.count}/>);
// console.log(props);
    let newPostElement = React.createRef();

    const addPost = () =>{
        props.addNewPost();
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={classes.posts}>
            <p className={classes.post}>New post</p>
            <textarea ref={newPostElement} onChange={onPostChange} name="new_post" id="new_post" cols="" rows="7" value={props.newPostText} /><br/>
            <button onClick={ addPost }>Add</button>
            <p className={classes.post}>My posts</p>
            {postEl}
        </div>
    );
}

export default MyPosts;