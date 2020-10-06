import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}
  
  return (
    <div className={s.content}>
      <div>
        <img src='https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg' /></div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        ava+description
      </div>
    </div>
  );

}

export default ProfileInfo;