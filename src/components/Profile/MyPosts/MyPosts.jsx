import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../../utils/validation/validators';
import { TextArea } from '../../common/FormsControl/FormsControls';

const maxLength10 = maxLenghtCreator(10);

const MyPosts = (props) => {

  let posts = props.posts;

  let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  );

}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} name = "newPostText" 
         placeholder='enter your message' 
         validate ={[required, maxLength10]}
         />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}


const AddNewPostFormRedux = reduxForm({
  form: 'profileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts;