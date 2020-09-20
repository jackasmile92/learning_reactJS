import React from 'react';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext.js';


const DialogsContainer = () => {

    return (
    <StoreContext.Consumer>
        { store => {

            let addMessage = () => {
               store.dispatch(addMessageActionCreator());
            };
        
            let onDialogChange = (text) => {
                store.dispatch(updateNewDialogTextActionCreator(text) );
              };
        

            return  <Dialogs updateNewMessageBody={onDialogChange} sendMessage={addMessage} 
            dialogsPage={store.getState().dialogsPage} />
        }
    }</StoreContext.Consumer>       
    );
}

export default DialogsContainer;