import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {
    let dialogs =props.dialogData;

    let messagesData = props.messagesData;

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = messagesData
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;