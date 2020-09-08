import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg' /></div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  );

}

export default ProfileInfo;