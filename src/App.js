import React from 'react';
import './App.css';

const App = () => {
return(
    <div className= 'app-wrapper'>
      <header className ='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
       <div> <img src='https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg'/></div>
       <div>
         ava+description
       </div>
       <div>
         My posts
         <div>
           New Post
         </div>
         <div>
           <div>Post 1</div>
           <div>Post 2</div>
         </div>
       </div>
      </div>
  </div>
);

}

export default App;
