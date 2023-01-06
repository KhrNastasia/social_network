import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    },
};

window.store = store;
export default store;

