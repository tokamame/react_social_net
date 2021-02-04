import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <img src='https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg' />

    <div>
      ava + description
  </div>
    <MyPosts />
  </div>
}

export default Profile;