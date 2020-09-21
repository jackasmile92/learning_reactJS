const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let initialState ={
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "how are you?" },
        { id: 3, message: "Yooooo" }
    ],
    dialogs: [
        { id: 1, name: 'Name 1' },
        { id: 2, name: 'Name 2' },
        { id: 3, name: 'Name 3' },
        { id: 4, name: 'Name 4' }
    ],
    newDialogText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 5,
                message: state.newDialogText
            };
            let stateCopy ={...state};
            stateCopy.messagesData =[...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newDialogText = '';
            return stateCopy;}
        case UPDATE_NEW_MESSAGE:{
            let stateCopy ={...state};
            stateCopy.newDialogText = action.text;
            return stateCopy;}
        default: return state;
    }

}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewDialogTextActionCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE, text: text }
);


export default dialogsReducer;