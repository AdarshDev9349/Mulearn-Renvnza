import React from 'react';
import CountdownTimer  from './timer';
import { Link } from 'react-scroll';
import video from './video/agent-background-generic.mp4'

const Header = () => {
  return (
   <header>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
     <div className='head'>
     <h1>Forge Your Tech Destiny</h1>
        <p>Embark on the ultimate quest to Power up and conquer the future of technology!</p>
        <div className="countdown">
          <p style={{fontSize:'20px',fontWeight:'bold'}}>Time until blastoff🚀</p>
          <br></br>
          <CountdownTimer/>
        </div>
       <div className='btndiv'>
       <button className='eventbtn second'>      
        <span class="btn__inner">
        <span class="btn__slide"></span>
        <span class="btn__content">Sponsor us</span>
      </span>
        
        </button>
        <Link style={{display:'contents'}} to="all-events" smooth={true} duration={200}>
        <button className='eventbtn btn--light'>      
        <span class="btn__inner" style={{padding:'16px 43px'}}>
        <span class="btn__slide"></span>
        <span class="btn__content">Events</span>
      </span>
        
        </button>
        </Link>
        
        </div> 
     </div>
   
  </header>  
  );
};

export default Header;
