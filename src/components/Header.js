import React from 'react';
import CountdownTimer  from './timer';
import { Link as Scroll } from 'react-scroll';

import { Link} from 'react-router-dom';

const Header = () => {
  return (
   <header>
    <div className='backgroundwebp'>
     
    </div>
     <div className='head'>
     <h1>Forge Your Tech Destiny</h1>
        <p>Embark on the ultimate quest to Power up and conquer the future of technology!</p>
        <div className="countdown">
          <p style={{fontSize:'20px',fontWeight:'bold'}}>Time until blastoff🚀</p>
          <br></br>
          <CountdownTimer/>
        </div>
       <div className='btndiv'>
       <Link to={'/sponsor-us'} style={{color:'none'}}> 
       <button className='eventbtn second'>      
        <span class="btn__inner">
        <span class="btn__slide"></span>
        <span class="btn__content">Sponsor us</span>
      </span>
        
        </button>
        </Link>
        <Scroll style={{display:'contents'}} to="all-events" smooth={true} duration={200}>
        <button className='eventbtn btn--light'>      
        <span class="btn__inner" style={{padding:'16px 43px'}}>
        <span class="btn__slide"></span>
        <span class="btn__content">Events</span>
      </span>
        
        </button>
        </Scroll>
        
        </div> 
     </div>
     
  </header>  
  );
};

export default Header;
