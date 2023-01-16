import React from "react";
import { addNewMsgActionCreator, updNewMsgActionCreator} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
debugger;
    let state = props.dialogInfo.getState().dialogsPage;

    const addMessage = () =>{
        props.dialogInfo.dispatch(addNewMsgActionCreator());
    }

    const onMsgChange = (msg_text) => {
        props.dialogInfo.dispatch(updNewMsgActionCreator(msg_text))
    }

    return (
       <Dialogs updNewMsgBody={onMsgChange} addNewMsg={addMessage} dialogsPage={state}/>
    );
};

export default DialogsContainer;
