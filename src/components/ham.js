import React, { useState } from 'react';
import logo from './img/Renvnza.svg';
import logo2 from './img/mulearn-campus-logo.svg';

const Navbarham = () => {
  // State to manage the active class
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the active class
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <a href="https://www.renvnza.in/" className="nav-logo no-space"><img src={logo} alt="Logo" /></a>
      <a href="https://mulearn-ucek.netlify.app/" className="nav-logo no-space mulearn"><img src={logo2} alt="Logo" /></a>
      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>

        {/* Moved Home, Events, Contact, and Renvnza into hamburger menu */}
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="https://events.renvnza.in/" className="nav-link">More Events</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="https://www.renvnza.in/" className="nav-link">Renvnza</a></li>
      </ul>
      {/* Main navigation menu */}
   
      
      {/* Hamburger menu */}
      <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbarham;
