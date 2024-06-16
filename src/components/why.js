import React from 'react';
import image from './img/Breach_artwork.svg';


const Partner = () => {
    return (
        <div className="section-hero">
            <img src={image} alt="Image" className="hero-img" />
            <div className="text">
                <h1>
                    Why Partner with <span className='span'>MuLearn ucek?</span>
                </h1>
                <p style={{marginBottom:'10px'}}>
                MuLearn UCEK, supported by G TECH and over 250 multinational companies, offers an unparalleled platform for events and opportunities. Here’s why sponsoring us can make a significant difference:
                </p>
                <div className='small-div'>
                <ul>
                    <li>5+ students joined startup companies</li>
                    <li>20+ students secured internships</li>
                    <li>Ranked 8th in Kerala</li>
                    <li>500+ students skilled up</li>
                </ul>
                <img src={image} alt="Image" className="small-img" /></div>
                <p>
                As a part of Mulearn foundation we are  to provide top-notch resources and opportunities for our students, fostering innovation, skill development, and career advancement.
                </p>
                <div className="btndiv">
                    <button className="eventbtn" style={{top:'0',marginTop:'16px',marginLeft:'9px'}}>
                        <span className="btn__inner">
                            <span className="btn__slide"></span>
                            <span className="btn__content">Get in Touch with us</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Partner;
