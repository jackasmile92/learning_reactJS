import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = props.state;

    let friendsElements = friends.map(f => <Friend name={f.name} avatar={f.avatar} />
    )

    return (
        <div className={s.content}>
            {friendsElements}
        </div>
    );
}

export default Friends;