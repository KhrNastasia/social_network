import React from "react";
import { addNewMsgActionCreator, updNewMsgActionCreator} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {

    // let state = props.dialogInfo.getState().dialogsPage;

    // const addMessage = () =>{
    //     props.dialogInfo.dispatch(addNewMsgActionCreator());
    // }

    // const onMsgChange = (msg_text) => {
    //     props.dialogInfo.dispatch(updNewMsgActionCreator(msg_text))
    // }

    // return (
    //    <Dialogs updNewMsgBody={onMsgChange} addNewMsg={addMessage} dialogsPage={state}/>
    // );
    // };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updNewMsgBody: (msg_text) => {
            dispatch(updNewMsgActionCreator(msg_text))
        },
        addNewMsg: () => {
            dispatch(addNewMsgActionCreator());
        }
    };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
