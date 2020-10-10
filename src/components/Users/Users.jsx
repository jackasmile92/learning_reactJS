import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                }
                )
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink> </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                userAPI.unfollow(u.id).then(response => {

                                    if (response.resultCode === 0) {

                                        props.unfollow(u.id);
                                    }
                                }
                                );                             
                            }}>Unfollow</button>
                            : <button onClick={() => {

                                userAPI.follow(u.id).then(response => {

                                        if (response.resultCode === 0) {

                                            props.follow(u.id);
                                        }
                                    }
                                    );
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;