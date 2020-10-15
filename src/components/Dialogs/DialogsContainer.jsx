import React from 'react';
import { connect } from 'react-redux';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
        }
}


let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (text) => {
            dispatch(updateNewDialogTextActionCreator(text) );
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;