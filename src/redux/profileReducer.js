import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_ITEM = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you', likeCount: '12' },
        { id: 2, message: 'its my first post', likeCount: '11' },
        { id: 3, message: 'Hi how are you', likeCount: '13' },
        { id: 4, message: 'its my first post', likeCount: '141' }
    ],
    newPostText: 'newtext',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_ITEM: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_ITEM, text: text }
);

export const setUserProfile = (profile) => (
    { type: SET_USER_PROFILE, profile }
);

export const getUserProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userID).then(response => {
            dispatch(setUserProfile(response));
        }
        );
    }

}

export default profileReducer;