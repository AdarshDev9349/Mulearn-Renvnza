// src/components/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import image from './img/poster.png'
import { Link } from 'react-router-dom';

const eventDetails = {
  1: {
    title: "Dev Expo",
    description: "Join us for Dev-Expo 2024, a grand exhibition where students and professionals from various campuses and industries come together to showcase a diverse range of cutting-edge technical frameworks, stacks, and groundbreaking projects. Immerse yourself in the future of technology and discover new insights through the creativity and innovation of the next generation.",
    image: image,
    date: "3/6/2024",
    time: "10.30 AM",
    venue: "Kariavattom"
  },
  2: {
    title: "Product Designing",
    description: "Join the Product Designing Workshop as part of RenVnzA'24, hosted by Mulearn UCEK! Dive into the world of product design and explore the entire product development experience, from framing to ideation and final concepts!",
    image: image,
    date: "5/6/2024",
    time: "7.00 PM",
    venue: "Kariavattom"
  },
  3: {
    title: "Grand Quest Auto",
    description: "GQA is aiming to be South India's Largest Techno Treasure Hunt.GQA is more than just a treasure hunt—it's a challenging event meant to push your tech skills to the limit. GQA features various tech challenges in areas like coding, cybersecurity, and data analysis. Participants must use their knowledge, ingenuity, and problem-solving abilities to succeed.Held on a large 350-acre campus, the tasks mimic real-life situations to provide practical experience. Unlike typical games, GQA needs practical skills and creativity.",
    image: image,
    date: "29/6/2024",
    time: "9.00 AM",
    venue: "Kariavattom"
  },
  4: {
    title: "UI/UX Workshop",
    description: "Unleash your creativity and explore the world of user experience and design in our workshop, hosted by Mulearn UCEK! Dive into the principles of user-centered design, learn wireframing techniques, and master the art of prototyping tools. Whether you're a budding designer or looking to enhance your skills, this workshop offers a unique opportunity to refine your digital journey as part of RenVnzA'24.",
    image: image,
    date: "15/6/2024",
    time: "6.00 AM",
    venue: "Kariavattom"
  },
  5: {
    title: "3D Printing Workshop",
    description: "Join us for an engaging 3D Printing Workshop where you will explore the fundamentals of 3D printing technology. This workshop covers essential concepts, from designing 3D models to operating 3D printers. Gain hands-on experience with industry-standard software and hardware, and learn best practices for successful 3D prints. Whether you're a beginner or seeking to enhance your skills, this workshop will provide the insights and techniques needed to turn your creative ideas into physical objects. Take advantage of this opportunity to delve into the exciting world of 3D printing and elevate your design capabilities!",
    image: image,
    date: "20/6/2024",
    time: "11.00 AM",
    venue: "Kariavattom"
  },
  6: {
    title: "Nexus Conclave",
    description: "Welcome to the Nexus Conclave 2024 at RenVnza, a premier event dedicated to addressing the latest trends, challenges, and innovations in human resources. This year’s theme, Navigating the Future of Work , focuses on equipping HR professionals on various industries ,and talks by the mentors of tech communities bringing out insights how tech communities bring out a great impact on converting a campus into a dynamic and evolving workplace landscape. This conclave offers a unique opportunity to network, learn, and grow with the best in the field.",
    image: image,
    date: "25/6/2024",
    time: "1.00 PM",
    venue: "Kariavattom"
  },
  7: {
    title: "PCB Designing",
    description: "Join us for an intensive PCB Designing Workshop where you'll learn to create schematics and develop your first fabricated PCB board. This hands-on session covers essential design principles, ideation steps, and best practices for PCB development. Gain practical experience in electronic design automation (EDA) tools and understand the complete workflow from concept to fabrication. Whether you're a beginner or looking to refine your skills, this workshop will equip you with the knowledge and confidence to bring your electronic projects to life.",
    image: image,
    date: "30/6/2024",
    time: "3.00 PM",
    venue: "Kariavattom"
  }
};


const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    
     <header className='details-head'>
    <nav className="navbar">
     
     <ul className='nav-menu'>
      <Link to={'/'}><li className="nav-item"><a href="#" className="nav-link">Home</a></li></Link> 
    
       <li className="nav-item"><a href="https://events.renvnza.in/" className="nav-link">More Events</a></li>

      <li className="nav-item"><a href="#event-code" className="nav-link">Code of Conduct</a></li>
       <li className="nav-item"><a href="https://www.renvnza.in/" className="nav-link">Renvnza</a></li>
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
        <span class="btn__content">Coming Soon</span>
        </span>
      </button>
      </div>
    </div>  

    </div>



    
        
  <div className='event-code' id='event-code' >
      <h1>Code of Conduct</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis. Eos reprehenderit deleniti libero, cum quam eaque consequatur vero quibusdam, minus, error corporis ipsa amet quo excepturi tempora obcaecati repellat!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio, similique, aperiam quis reiciendis ducimus minus repudiandae, veniam recusandae incidunt dolor expedita nam hic quas tenetur? Obcaecati, cum nulla! Nam.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio, similique, aperiam quis reiciendis ducimus minus repudiandae, veniam recusandae incidunt dolor expedita nam hic quas tenetur? Obcaecati, cum nulla! Nam.</p>
      
    </div>
  
    </header>
    
  );
};

export default EventDetail;
