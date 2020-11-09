import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}
  
  return (
    <div className={s.content}>
       <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatusWithHooks status={props.status} updateStatus ={props.updateStatus}/>
      </div>
    </div>
  );

}

export default ProfileInfo;