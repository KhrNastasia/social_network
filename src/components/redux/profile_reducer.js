const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: "1", msg: "Hi, how are you?", count: "15" },
    { id: "2", msg: "It's my first post", count: "6" },
    { id: "3", msg: "Cool!!", count: "1000" },
  ],
  newPostText: "бла бла бла",
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST: 
    {
      const newPost = {
        id: "5",
        msg: state.newPostText,
        count: "0",
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: 
    {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

//action creator для добавления поста на страницу
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

//action creator для обновления текста в поле ввода
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
