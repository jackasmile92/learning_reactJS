import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

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

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/*<Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />

          */}
          <Route path="/dialogs" render={() => <Dialogs dialogData={dialogs} messagesData={messagesData} />} />
          <Route path="/profile" render={() => <Profile posts={posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
