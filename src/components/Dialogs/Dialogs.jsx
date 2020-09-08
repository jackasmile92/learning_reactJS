import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1"> Name 1</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"> Name 2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"> Name 3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4"> Name 4</NavLink>
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