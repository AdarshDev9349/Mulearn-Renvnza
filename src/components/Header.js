import React from 'react';
import CountdownTimer  from './timer';
import { Link } from 'react-scroll';
import video from './video/agent-background-generic.mp4'

const Header = () => {
  return (
    <div className='detail'>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
     <div className='head'>
     <h1>Forge Your Tech Destiny</h1>
        <p>Embark on the ultimate quest to Power up and conquer the future of technology!</p>
        <div className="countdown">
          <p>Time until blastoff🚀</p>
          <br></br>
          <CountdownTimer/>
        </div>
        <Link style={{display:'contents'}} to="all-events" smooth={true} duration={200}>
        <button className='eventbtn'>EVENTS</button>
        </Link>
     </div>
    </div>
    
  );
};

export default Header;
