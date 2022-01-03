import React from "react";
// import { auth } from "../component/firebase";

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.messages;
    return ( <
        div className = "flex flex-row" >
        <
        img src = { photoURL }
        /> <p> {text} </p >
        <
        /div>
    );
};

export default ChatMessage;