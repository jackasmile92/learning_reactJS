import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
       <div> <img src='https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg'/></div>
       <div>
         ava+description
       </div>
       <div>
         My posts
         <div>
           New Post
         </div>
         <div className={s.posts}>
           <div className={s.item}>Post 1</div>
           <div className={s.item}>Post 2</div>
         </div>
       </div>
      </div>
    );

}

export default Profile;