import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
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
          <Route path="/profile/:userId?" render={() => 
            <ProfileContainer />} />

            <Route path ='/users' render ={()=> <UsersContainer /> } />
        </div>
      </div>
  );

}

export default App;
