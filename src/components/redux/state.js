import {rerenderEntireTree} from "../../render";


let state = {
    profilePage:{
        postsData: [
            {id: "1", msg: "Hi, how are you?", count: '15'},
            {id: "2", msg: "It's my first post", count: '6'},
            {id: "3", msg: "Cool!!", count: '1000'}
        ]
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
}

export let addPost = (PostMessage) => {
    const NewPost ={
        id: 5,
        msg: PostMessage,
        count: 0
    };
    state.profilePage.postsData.push(NewPost);
    rerenderEntireTree(state);
}

export default state;
