import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
    <img src='https://logoeps.com/wp-content/uploads/2014/09/23689-chrome-logo-icon-vector-icon-vector-eps.png' alt ='logo' />
    <span className={s.logoText}>New super network</span>
  </header>
}

export default Header;