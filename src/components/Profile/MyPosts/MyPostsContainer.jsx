import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile_reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    console.log(state);
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsData,
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