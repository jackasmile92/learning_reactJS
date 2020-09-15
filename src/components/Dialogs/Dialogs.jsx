import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let dialogs = props.state.dialogs;

    let messagesData = props.state.messagesData;

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = messagesData
        .map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewDialogTextActionCreator(text) );
      };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <textarea onChange={onDialogChange} ref={newMessageElement} value ={props.state.newDialogText} placeholder='enter your message'></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;