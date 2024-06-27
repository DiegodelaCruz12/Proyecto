import React from 'react';
import '../../styles/nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="login-icon"><a href="#login"><img src="path/to/login-icon.png" alt="Login" /></a></div>
    </nav>
  );
};

export default NavBar;
