const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_ITEM = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you', likeCount: '12' },
        { id: 2, message: 'its my first post', likeCount: '11' },
        { id: 3, message: 'Hi how are you', likeCount: '13' },
        { id: 4, message: 'its my first post', likeCount: '141' }
    ],
    newPostText: 'newtext'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy ={...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;}
        case UPDATE_NEW_POST_ITEM:{
            let stateCopy ={...state};
            stateCopy.newPostText = action.text;
            return stateCopy;}
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_ITEM, text: text }
);

export default profileReducer;