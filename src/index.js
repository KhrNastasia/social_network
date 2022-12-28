import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import MessageItem from "./components/Dialogs/MessageItem/MessageItem";
import Post from "./components/Profile/MyPosts/Post/Post";
import state from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App Data={state}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
