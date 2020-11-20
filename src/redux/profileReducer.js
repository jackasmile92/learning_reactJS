import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you', likeCount: '12' },
        { id: 2, message: 'its my first post', likeCount: '11' },
        { id: 3, message: 'Hi how are you', likeCount: '13' },
        { id: 4, message: 'its my first post', likeCount: '141' }
    ],
    newPostText: 'newtext',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });


export const setUserProfile = (profile) => (
    { type: SET_USER_PROFILE, profile }
);

export const setStatus = (status) => (
    { type: SET_STATUS, status }
);

export const getUserProfile = (userID) =>
    async (dispatch) => {
        let response = await profileAPI.getProfileInfo(userID);
        dispatch(setUserProfile(response));

    }


export const getStatus = (userID) =>
    async (dispatch) => {
        let response = profileAPI.getStatus(userID);
        dispatch(setStatus(response.data));

    }


export const updateStatus = (status) =>
    async (dispatch) => {
        let response = profileAPI.updateStatus(status);

        if (response.data.resultCose === 0) {
            dispatch(setStatus(status));
        }

    }




export default profileReducer;