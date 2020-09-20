import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onDialogChange = (text) => {
        props.store.dispatch(updateNewDialogTextActionCreator(text) );
      };

    return (
        <Dialogs updateNewMessageBody={onDialogChange} sendMessage={addMessage} 
        dialogsPage={state} />
    );
}

export default DialogsContainer;