import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}
  
  return (
    <div className={s.content}>
       <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatus status={"HELLO"}/>
      </div>
    </div>
  );

}

export default ProfileInfo;