import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' }];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "how are you?" },
  { id: 3, message: "Yooooo" }
];

let posts = [
  { id: 1, message: 'Hi how are you', likeCount: '12' },
  { id: 2, message: 'its my first post', likeCount: '11' },
  { id: 3, message: 'Hi how are you', likeCount: '13' },
  { id: 4, message: 'its my first post', likeCount: '141' }
];


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messagesData={messagesData} posts ={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
