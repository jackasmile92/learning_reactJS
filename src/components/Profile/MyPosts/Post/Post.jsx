import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (

    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Eiganotomo-avagardner-dec1953.jpg/220px-Eiganotomo-avagardner-dec1953.jpg' />
          Post 1
      <div><span>like</span></div>

    </div>

  );

}

export default Post;