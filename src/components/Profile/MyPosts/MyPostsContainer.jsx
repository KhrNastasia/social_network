import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile_reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//     debugger;
//     let state = props.store.getState();

//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     //вызывается когда меняется textarea
//     const onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return (
//         <MyPosts updateNewPostText={onPostChange} addNewPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
//     );
// }

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;