import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogs;

    let messagesData = state.messagesData;

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = messagesData
        .map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        props.store.dispatch(updateNewDialogTextActionCreator(text) );
      };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <textarea onChange={onDialogChange} ref={newMessageElement} value ={state.newDialogText} placeholder='enter your message'></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;