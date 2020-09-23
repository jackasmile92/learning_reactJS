import React from 'react';
import s from './Users.module.css'

let Users = (props) => {

    if(props.users.lenght === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl:'https://i.pinimg.com/564x/27/a7/d4/27a7d43fd28cfffea5452f3d91547a56--daffy-duck-looney-tunes.jpg',
            followed: false,
            fullName: 'Dimitry',
            status: 'I am a boss',
            location: {
                city: 'Minsk',
                county: 'Belarus'
            }
        },
        {
            id: 2,
            photoUrl:'https://i.pinimg.com/564x/27/a7/d4/27a7d43fd28cfffea5452f3d91547a56--daffy-duck-looney-tunes.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {
                city: 'Moscow',
                county: 'Russia'
            }
        },
        {
            id: 3,
            photoUrl:'https://i.pinimg.com/564x/27/a7/d4/27a7d43fd28cfffea5452f3d91547a56--daffy-duck-looney-tunes.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {
                city: 'Kiev',
                county: 'Ukrain'
            }
        }
    ])
}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={s.userPhoto} /></div>
                    <div>
                        {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{u.location.country} </div>
                        <div>{u.location.city} </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;