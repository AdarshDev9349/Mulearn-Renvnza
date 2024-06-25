import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmallEvents from './Events(s)';
import { Link } from 'react-router-dom';

const Events = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation(); 

  const eventsData = [
    {
      id: 'nexus_conclave',
      title: "Nexus Conclave",
      description: "Join Nexus Conclave 2024 to explore HR trends and tech community insights.Network and learn with industry leaders.",
      highlight: false
    },
    {
      id: 'uiux',
      title: "UI/UX Workshop",
      description: "Join us to unleash your creativity and explore the world of user experience and design in our workshop.",
      highlight: false
    },
    {
      id: 'product_designing',
      title: "Product Designing",
      description: "Join the Product Designing Workshop and explore product development from ideation to final concepts!",
      highlight: false
    },
    {
      id: 'laser_engraving',
      title: "Laser Engrvaing",
      description: "Join us for a hands-on workshop and discover how laser cutting technology can help you turn your creative ideas into reality! ",
      highlight: true
    },
    {
      id: 'Gamedev',
      title: "Game Development",
      description: "Join us for our upcoming game development workshop in collaboration with TILTEDU...",
      highlight: false
    },
    {
      id: '3d_printing',
      title: "3D Printing",
      description: "Join us for an engaging 3D Printing Workshop where you will explore the fundamentals of 3D printing technology.",
      highlight: false
    },
    {
      id: 'pcb_designing',
      title: "PCB Designing",
      description: "Join us for an intensive PCB Designing Workshop where you'll learn to create schematics.",
      highlight: false
    },

    
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1400);
    };

    window.addEventListener('resize', handleResize);

  
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isSmallScreen) {
    return <SmallEvents />;
  }

  return (
    <section className="all-events" id='all-events'>
      <h1 style={{display:'flex',justifyContent:'center'}}>Events</h1>
      <div className="main">
        {eventsData.map(event => (
          <div key={event.id} className={`event-card ${event.highlight ? 'highlight' : ''}`}>
            <div className="event-card-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <Link to={`/event/${event.id}`}><button className="button">Learn More</button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
