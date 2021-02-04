import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
      <a href='#one'>Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a href='#one'>Messages</a>
    </div>
    <div className={s.item}>
      <a href='#one'>News</a>
    </div>
    <div className={s.item}>
        <a href='#one'>Music</a>
    </div>
    <div className={s.item}>
      <a href='#one'>Settings</a>
    </div>

  </nav>
}

export default Navbar;