import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
console.log(props)

    const dialogElement = props.dialogs.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id}/>
    ));

    const msgElement = props.dialogs.msgData.map((m) => (
        <MessageItem msg={m.msg} key={m.id}/>
    ));

    const ta = React.createRef();

    const addMessage = () =>{
        const textA = ta.current.value;
        alert (textA);
    }

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>{dialogElement}</div>
            <div className={classes.messages}>{msgElement}</div>
            <textarea ref={ta}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>
    );
};

export default Dialogs;
