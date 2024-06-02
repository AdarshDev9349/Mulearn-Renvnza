// src/components/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import image from './img/poster.png'
const eventDetails = {
  1: {
    title: "Upcoming Event 1",
    description: "Join us for an exciting Valorant tournament featuring top players from around the world.Join us for an exciting Valorant tournament featuring top players from around the world.Join us for an exciting Valorant tournament featuring top players from around the world.Join us for an exciting Valorant tournament featuring top players from around the world.",
    image: image ,
    date:'3/6/2024',
    time:'10.30 AM',
    venue:'EMS Hall',
  

  },
  // Add more event details as needed
};

const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    
     <header className='details-head'>
    <nav className="navbar" style={{padding:'40px'}}>
     
     <ul className='nav-menu'>
       <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
    
       <li className="nav-item"><a href="#" className="nav-link">Events</a></li>

       <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
       <li className="nav-item"><a href="#" className="nav-link">Renvnza</a></li>
     </ul>
   </nav>

    <div className="event-detail" >
      <img src={event.image}></img>
    <div className='event-info'>
        <h1>{event.title}</h1>
        <p><b>ABOUT : </b>{event.description}</p>
        <ul>
          <li>DATE: {event.date}</li>
          <li>TIME: {event.time}</li>
          <li>VENUE: {event.venue}</li>
        </ul>
        <div className='btndiv' style={{justifyContent:'center'}}>
       <button className='eventbtn second'>      
        <span class="btn__inner">
        <span class="btn__slide"></span>
        <span class="btn__content">Register now</span>
      </span>
      </button>
      </div>
    </div>  

    </div>
    </header>
  );
};

export default EventDetail;
