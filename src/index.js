import store from "./components/redux/redux_store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App Data={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

reportWebVitals();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
;

// store.subscribe(()=>{
//     let state = store.getState();
//     rerenderEntireTree(state);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

