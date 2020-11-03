import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar /*state = {props.state.siteBar}*/ />
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

          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
)

export default compose(
  withRouter,
  connect(mapStateToProps, { initApp }))(App);