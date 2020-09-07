import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Eiganotomo-avagardner-dec1953.jpg/220px-Eiganotomo-avagardner-dec1953.jpg' />
          {props.message}
      <div><span>like</span> {props.likeCount}</div>

    </div>

  );

}

export default Post;