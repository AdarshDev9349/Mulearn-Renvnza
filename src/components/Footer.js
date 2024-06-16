import React from 'react';
import logo from './img/Renvnza.svg';
import logo2 from './img/mulearn-campus-logo.svg';
import instagram from './img/instagram.svg'
import github from './img/github.svg'
import twitter from './img/twitter.svg'
import reddit from './img/reddit.svg'
const Footer = () => {
  return (
    <footer className='footer' >
       <div className='Social-icon'>
        <h1>Social media</h1>
          <ul>
            <li><a href='https://www.instagram.com/mulearn.ucek/'><img src={instagram} alt='Instagram'></img></a></li>
            <li><a href='https://github.com/Mulearn-ucek'><img src={github} alt='Github'></img></a></li>
            <li><a href='https://x.com/MulearnU'><img src={twitter} alt='Twitter'></img></a></li>
            <li><a href='https://www.linkedin.com/company/mulearn-ucek/' alt='Reddit' ><img src={reddit}></img></a></li>

          </ul>
          
        </div>
      <div className='footer-logos'>
         <div className='logo-f'><a href="https://www.renvnza.in/" className="nav-logo  no-space"><img src={logo} alt="Logo" /></a>
         <a href="https://mulearn-ucek.netlify.app/" className="nav-logo no-space mulearn"><img src={logo2} alt="Logo" /></a></div>
        <p style={{margin:'8px'}}><i className="fas fa-copyright"></i>  Made With Passion by MulearnUcek</p>
        <p style={{margin:'10px'}} className="p2">All images, videos, and contents are property of riot games</p>
        </div>
        <div className='contact'>
          <h1>Contact Us</h1>
           <ul>
            <li>Email: mulearnucek@gmail.com
              <li>Phone: 7907977205</li>
            </li>
           </ul>
        </div>

    </footer>
  );
};

export default Footer;
