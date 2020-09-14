import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state.js"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};



rerenderEntireTree(store.getState()); 

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
