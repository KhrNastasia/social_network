import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App Data={state} addPost={addPost}/>
        </React.StrictMode>
    );
}

reportWebVitals();

