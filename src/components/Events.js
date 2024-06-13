import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmallEvents from './Events(s)'; // Import the new component
import { Link } from 'react-router-dom';

const Events = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1400);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isSmallScreen) {
    return <SmallEvents />;
  }

  return (
    <section className="all-events">
      <h1><span>//</span>Events</h1>
      <div className="main">
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/6'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/4'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/2'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card highlight">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/1'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/3'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/5'}><button className="button">Learn More</button></Link>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-content">
            <h2>Upcoming Event</h2>
            <p>Join us for an exciting Valorant tournament featuring top players from around the world.</p>
            <Link to={'/event/7'}><button className="button">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

