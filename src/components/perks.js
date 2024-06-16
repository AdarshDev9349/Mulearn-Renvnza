import React from 'react';


const SponsorshipPerks = () => {
  return (
    <div className="section-sponsorship">
      <div className="text">
        <h1>
          Discover Your <span className='span'>Sponsorship Perks</span>
        </h1>
        <div className="perks-container">
          <div className="perk">
            <h2>Title Sponsor (50k)</h2>
            <ul>
              <li>Name & Logo attached with title & title sponsor placed near the event name in largest size</li>
              <li>On all creatives (online & offline)</li>
              <li>Deliverables:
                <ul>
                  <li>Standees</li>
                  <li>Stalls</li>
                  <li>Community promotion</li>
                  <li>Rights to re-use event’s media assets</li>
                  <li>Students Marketing</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="perk">
            <h2>Gold Package (30k)</h2>
            <ul>
              <li>Name & Logo attached with title & title sponsor placed near the event name in largest size</li>
              <li>On all creatives (online & offline)</li>
              <li>Deliverables:
                <ul>
                  <li>Standees</li>
                  <li>Community promotion</li>
                  <li>Rights to re-use event’s media assets</li>
                  <li>Students Marketing</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="perk">
            <h2>Silver Package (10k)</h2>
            <ul>
              <li>Name & Logo attached with title & title sponsor placed near the event name in largest size</li>
              <li>On all creatives (online & offline)</li>
            </ul>
          </div>
        </div>
        <div className="btndiv">
          <button className="eventbtn" style={{marginLeft:"10px"}}>
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

export default SponsorshipPerks;
