import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg'
                alt='profile logo'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;