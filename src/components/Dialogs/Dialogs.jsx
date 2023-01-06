import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { addNewMsgActionCreator, updNewMsgActionCreator} from "../redux/dialogs_reducer";



const Dialogs = (props) => {
console.log(props)

    let NewMsgElement = React.createRef();

    const addMessage = () =>{
        props.dispatch(addNewMsgActionCreator());
    }

    const onMsgChange = () => {
        let msg_text = NewMsgElement.current.value;
        props.dispatch(updNewMsgActionCreator(msg_text))
    }

    const dialogElement = props.dialogs.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id}/>
    ));

    const msgElement = props.dialogs.msgData.map((m) => (
        <MessageItem msg={m.msg} key={m.id}/>
    ));

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>{dialogElement}</div>
            <div className={classes.messages}>{msgElement}</div>
            <textarea ref={NewMsgElement} onChange={onMsgChange}
                      name="new_msg" id="new_msg" cols='' rows=''
                      value={props.dialogs.newMsgData}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>
    );
};

export default Dialogs;
