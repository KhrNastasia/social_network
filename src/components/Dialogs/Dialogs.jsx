import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    const dialogElement = props.diaData.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id}/>
    ));

    const msgElement = props.msgData.map((m) => (
        <MessageItem msg={m.msg} key={m.id}/>
    ));

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>{dialogElement}</div>
            <div className={classes.messages}>{msgElement}</div>
        </div>
    );
};

export default Dialogs;
