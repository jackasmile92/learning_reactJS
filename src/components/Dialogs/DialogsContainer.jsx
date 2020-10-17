import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { updateNewDialogTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);
  

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;