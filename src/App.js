import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar /*state = {props.state.siteBar}*//>
        <div className='app-wrapper-content'>
          {/*<Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />

          */}
          <Route path="/dialogs" render={() => 
            <DialogsContainer />} />
          <Route path="/profile" render={() => 
            <Profile />} />
        </div>
      </div>
  );

}

export default App;
