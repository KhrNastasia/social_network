const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: "5",
        msg: state.newPostText,
        count: "0",
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  }

  
};

//action creator для добавления поста на страницу
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

//action creator для обновления текста в поле ввода
export const updateNewPostTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default profileReducer;
