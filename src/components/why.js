import React from 'react';
import image from './img/charac.svg';


const Partner = () => {
    return (
        <div className="section-hero" >
           
            <div className="text">
                <h1>
                    Why Partner with <span className='span'>MuLearn ucek?</span>
                </h1>
                <p>
                MuLearn UCEK, supported by G TECH and over 250 multinational companies, offers an unparalleled platform for events and opportunities.  As a part of Mulearn foundation we are  to provide top-notch resources and opportunities for our students, fostering innovation, skill development, and career advancement.
                </p>
                <div className='small-div' style={{display:'none'}}>
                <ul>
                    <li>5+ students joined startup companies</li>
                    <li>20+ students secured internships</li>
                    <li>Ranked 8th in Kerala</li>
                    <li>500+ students skilled up</li>
                </ul>
                <img src={image} alt="Image" className="small-img" /></div>
        
                <div className="btndiv">
                 <a  href="mailto:mulearnucek@gmail.com"> 
                     <button className="eventbtn second" style={{top:'0',marginTop:'16px'}}>
                        <span className="btn__inner">
                            <span className="btn__slide"></span>
                            <span className="btn__content">Get in Touch with us</span>
                        </span>
                    </button></a>  
                </div>
            </div>
            <img src={image} alt="Image" className="hero-img" />
        </div>
    );
}

export default Partner;
