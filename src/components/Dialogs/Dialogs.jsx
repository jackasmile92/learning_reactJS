import React from 'react';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogs = state.dialogs;

    let messagesData = state.messagesData;

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = messagesData
        .map(m => <Message message={m.message} />);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <AddMessageFormsRedux onSubmit={addNewMessage} />
        </div>
    );
}


const AddMessageForms = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name = "newMessageBody"  placeholder="enter your message"/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormsRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForms)

export default Dialogs;