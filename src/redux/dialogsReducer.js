const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newDialogText
            };
            state.messagesData.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newDialogText = action.text;
            return state;
        default: return state;
    }

}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewDialogTextActionCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE, text: text }
);


export default dialogsReducer;