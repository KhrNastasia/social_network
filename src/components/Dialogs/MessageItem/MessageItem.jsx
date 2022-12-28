import React from "react";
import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
    return <div className={classes.messages}>{props.msg}</div>;
};

export default MessageItem;
