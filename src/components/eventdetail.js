// src/components/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import image from './img/poster.png'
const eventDetails = {
  1: {
    title: "Upcoming Event 1",
    description: "Join us for an exciting Valorant tournament featuring top players from around the world. Join us for an exciting Valorant tournament featuring top players from around the world. Join us for an exciting Valorant tournament featuring top players from around the world. Join us for an exciting Valorant tournament featuring top players from around the world.",
    image: image,
    date: "3/6/2024",
    time: "10.30 AM",
    venue: "EMS Hall"
  },
  2: {
    title: "Upcoming Event 2",
    description: "Experience the thrill of a live concert with renowned artists performing their greatest hits. Experience the thrill of a live concert with renowned artists performing their greatest hits. Experience the thrill of a live concert with renowned artists performing their greatest hits. Experience the thrill of a live concert with renowned artists performing their greatest hits.",
    image: image,
    date: "5/6/2024",
    time: "7.00 PM",
    venue: "City Arena"
  },
  3: {
    title: "Upcoming Event 3",
    description: "Join us for a tech conference where industry leaders will share their insights on the latest trends and innovations. Join us for a tech conference where industry leaders will share their insights on the latest trends and innovations. Join us for a tech conference where industry leaders will share their insights on the latest trends and innovations. Join us for a tech conference where industry leaders will share their insights on the latest trends and innovations.",
    image: image,
    date: "10/6/2024",
    time: "9.00 AM",
    venue: "Tech Park"
  },
  4: {
    title: "Upcoming Event 4",
    description: "Don't miss our annual charity run to support local communities and promote health and wellness. Don't miss our annual charity run to support local communities and promote health and wellness. Don't miss our annual charity run to support local communities and promote health and wellness. Don't miss our annual charity run to support local communities and promote health and wellness.",
    image: image,
    date: "15/6/2024",
    time: "6.00 AM",
    venue: "Central Park"
  },
  5: {
    title: "Upcoming Event 5",
    description: "Attend an art exhibition showcasing the works of contemporary artists from around the globe. Attend an art exhibition showcasing the works of contemporary artists from around the globe. Attend an art exhibition showcasing the works of contemporary artists from around the globe. Attend an art exhibition showcasing the works of contemporary artists from around the globe.",
    image: image,
    date: "20/6/2024",
    time: "11.00 AM",
    venue: "Art Gallery"
  },
  6: {
    title: "Upcoming Event 6",
    description: "Join us for a culinary festival featuring food stalls, cooking demonstrations, and competitions. Join us for a culinary festival featuring food stalls, cooking demonstrations, and competitions. Join us for a culinary festival featuring food stalls, cooking demonstrations, and competitions. Join us for a culinary festival featuring food stalls, cooking demonstrations, and competitions.",
    image: image,
    date: "25/6/2024",
    time: "1.00 PM",
    venue: "Downtown Plaza"
  },
  7: {
    title: "Upcoming Event 7",
    description: "Attend a business seminar to learn from successful entrepreneurs and expand your network. Attend a business seminar to learn from successful entrepreneurs and expand your network. Attend a business seminar to learn from successful entrepreneurs and expand your network. Attend a business seminar to learn from successful entrepreneurs and expand your network.",
    image: image,
    date: "30/6/2024",
    time: "3.00 PM",
    venue: "Convention Center"
  }
};


const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    
     <header className='details-head'>
    <nav className="navbar">
     
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


    <div className='event-code'>
      <h1>Code of Conduct</h1>
    </div>
    </header>
    
  );
};

export default EventDetail;
