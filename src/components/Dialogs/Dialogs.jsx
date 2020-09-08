import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    Name 1
                </div>
                <div className={s.dialog}>
                    Name 2
                </div>
                <div className={s.dialog}>
                    Name 3
                </div>
                <div className={s.dialog}>
                    Name 4
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>Yooooo</div>
            </div>
        </div>
    );
}

export default Dialogs;