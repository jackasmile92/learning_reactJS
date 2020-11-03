import { getAuthUserData } from "./authReducer.js";

const INIT_SUCCESS = 'SET-INIT';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default: return state;
    }
}

export const initSucces = () => ({ type: INIT_SUCCESS });

export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => { dispatch(initSucces());});


}

export default appReducer;