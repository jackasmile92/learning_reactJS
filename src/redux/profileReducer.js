const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_ITEM = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_ITEM:
            state.newPostText = action.text;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_ITEM, text: text }
);

export default profileReducer;