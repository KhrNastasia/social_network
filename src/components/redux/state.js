const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_MSG = 'UPD-MSG'

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: "1", msg: "Hi, how are you?", count: '15'},
                {id: "2", msg: "It's my first post", count: '6'},
                {id: "3", msg: "Cool!!", count: '1000'}
            ],
            newPostText: "бла бла бла"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Oksana"},
                {id: 2, name: "Stas"},
                {id: 3, name: "Katya"},
                {id: 4, name: "Den"},
                {id: 5, name: "Pasha"},
            ],
            msgData: [
                {id: 1, msg: "Hello"},
                {id: 2, msg: "What`s up?"},
                {id: 3, msg: "What`s your name?"},
                {id: 4, msg: "My name is Stacy."},
                {id: 5, msg: "Cool!"},
            ],
            newMsgData: "Hello from Future"
        }
    },
    _callSubscriber() {
        console.log("Hi hi hi")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель

    },

    //action - объект, у которого обязательно есть свойство type
    dispatch(action) { //{ type: "ADD-POST" }
        if (action.type === ADD_POST) {
            const newPost = {
                id: '5',
                msg: this._state.profilePage.newPostText,
                count: '0'
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE){
            const newMsg ={
                id: 10,
                msg: this._state.dialogsPage.newMsgData,
            }
            this._state.dialogsPage.msgData.push(newMsg);
            this._state.dialogsPage.newMsgData = '';
            this._callSubscriber();
        } else if (action.type === UPD_MSG){
            this._state.dialogsPage.newMsgData = action.msg_text;
            this._callSubscriber();
        }
    },
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

//добавление сообщения на эркан
export const addNewMsgActionCreator = () => {
    return{
        type: ADD_MESSAGE
    }
}

//добавление текста сообщения в текстовое поле
export const updNewMsgActionCreator = (msg_text) => {
    return{
        type: UPD_MSG,
        msg_text: msg_text
    }
}

window.store = store;
export default store;

