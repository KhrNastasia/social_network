let store = {
    _state : {
        profilePage:{
            postsData: [
                {id: "1", msg: "Hi, how are you?", count: '15'},
                {id: "2", msg: "It's my first post", count: '6'},
                {id: "3", msg: "Cool!!", count: '1000'}
            ],
            newPostText: "бла бла бла"
        },
        dialogsPage:{
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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("Hi hi hi")
    },
    addPost() {
        debugger;
        const newPost ={
            id: 5,
            msg: this._state.profilePage.newPostText,
            count: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель

    }
}

window.store = store;
export default store;

