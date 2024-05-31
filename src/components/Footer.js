import React from 'react';
import logo from './img/Group 1 (4).svg';
import logo2 from './img/mulearn-campus-logo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
       <a href="/" className="nav-logo  no-space"><img src={logo} alt="Logo" /></a>
        <a href="/" className="nav-logo no-space mulearn"><img src={logo2} alt="Logo" /></a>
        </div>
      <p style={{margin:'8px'}}><i className="fas fa-copyright"></i>  Made With Passion by MulearnUcek</p>
      <p style={{margin:'10px'}} className="p2">All images, videos, and contents are property of riot games</p>
    </footer>
  );
};

export default Footer;
