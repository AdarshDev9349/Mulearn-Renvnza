// src/components/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import video from './video/agent-background-generic.mp4'
import image from './img/pavithra 15.png'
const eventDetails = {
  1: {
    title: "Upcoming Event 1",
    description: "Join us for an exciting Valorant tournament featuring top players from around the world.",
    image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png"
  },
  // Add more event details as needed
};

const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    
     <header>
            <nav className="navbar">
     
     <ul className='nav-menu'>
       <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
    
       <li className="nav-item"><a href="#" className="nav-link">Events</a></li>

       <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
       <li className="nav-item"><a href="#" className="nav-link">Renvnza</a></li>
     </ul>
   </nav>
    <video autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
     </video>
    <div className="event-detail" style={{backgroundColor:'white',width:'-webkit-fill-available',margin:'30px',height:"80vh"}}>
      <img src={image}></img>
    <div className='event-info'>
        <h1>{event.title}</h1>
        
    </div>  
   
    </div>
    </header>
  );
};

export default EventDetail;
