import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}



const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );

}

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Name 1' },
        { id: 2, name: 'Name 2' },
        { id: 3, name: 'Name 3' },
        { id: 4, name: 'Name 4' }];
        
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "how are you?" },
        { id: 3, message: "Yooooo" }
    ];

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