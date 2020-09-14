import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.posts;

  let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();


  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', text: ''});
  };

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', text: text});
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  );

}

export default MyPosts;