import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi how are you', likeCount:'12'},
    { id: 2, message: 'its my first post', likeCount:'11' },
    { id: 3, message: 'Hi how are you', likeCount:'13'},
    { id: 4, message: 'its my first post', likeCount:'141' }
];

let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  );

}

export default MyPosts;