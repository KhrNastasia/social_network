const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_MSG = 'UPD-MSG'

const dialogsReducer = (state, action) =>{

    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_MESSAGE:
            const newMsg ={
                id: 10,
                msg: state.newMsgData,
            }
            state.msgData.push(newMsg);
            state.newMsgData = ''; 
            return state;
        case UPD_MSG:
            state.newMsgData = action.msg_text;
            return state;
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