import React from 'react';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div>
        <img
            src='https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg'
            alt='profile logo'/>

        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;