const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_MSG = 'UPD-MSG'

let initialState = {
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

const dialogsReducer = (state = initialState, action) =>{

    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_MESSAGE:
            {
                const newMsg ={
                id: 10,
                msg: state.newMsgData,
                }
                let stateCopy = {...state};
                stateCopy.msgData = [...state.msgData];
                stateCopy.msgData.push(newMsg);
                stateCopy.newMsgData = ''; 
                return stateCopy;
            }
        case UPD_MSG:
            {    
                let stateCopy = {...state};
                stateCopy.newMsgData = [...state.newMsgData]
                stateCopy.newMsgData = action.msg_text;
                return stateCopy;
            }
        default: 
            return state;
    }

}

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

export default dialogsReducer;