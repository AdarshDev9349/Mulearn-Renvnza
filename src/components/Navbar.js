import React, { useState,useEffect } from 'react';
import logo from './img/Renvnza.svg';
import logo2 from './img/mulearn-campus-logo.svg';
import Navbarham from './ham';
import { Link as Scroll } from 'react-scroll';
import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
    };

    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return <Navbarham />;
  }

  return (
    <nav className="navbar">
     
      <ul className='nav-menu'>
        <Link to={'/'}><li className="nav-item"><a href="" className="nav-link">Home</a></li></Link>
        {location.pathname === '/' ? (
          <Scroll style={{ display: 'contents' }} to="all-events" smooth={true} duration={200}>
            <li className="nav-item"><a href="#" className="nav-link">Events</a></li>
          </Scroll>
        ) : (
          <Link to="/">
            <li className="nav-item"><a href="#" className="nav-link">Events</a></li>
          </Link>
        )}
        <a href="https://www.renvnza.in/" className="nav-logo  no-space"><img src={logo} alt="Logo" /></a>
        <a href="https://mulearn-ucek.netlify.app/" className="nav-logo no-space mulearn"><img src={logo2} alt="Logo" /></a>
        <li className="nav-item"><a href="mailto:mulearnucek@gmail.com" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="https://www.renvnza.in/" className="nav-link">Renvnza</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
