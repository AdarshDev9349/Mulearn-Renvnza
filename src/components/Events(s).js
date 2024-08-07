import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';

const SmallEvents = () => {
  // Define the JSON data within the component
  const eventsData = [
    {
      id: 'nexus_conclave',
      title: "Nexus Conclave",
      description: "Join Nexus Conclave 2024 to explore HR trends and tech community insights.Network and learn with industry leaders.",
      imageUrl: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png"
    },
    {
      id: 'uiux',
      title: "Emotional Design Workshop",
      description: "Join us to unleash your creativity and explore the world of user experience and design in our workshop.",
      imageUrl:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png"
    },
    {
      id: 'product_designing',
      title: "Product Designing",
      description: "Join the Product Designing Workshop and explore product development from ideation to final concepts!",
      imageUrl: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png" 
    },
    {
      id: 'laser_engraving',
      title: "Laser Engraving",
      description: "Join us for Dev-Expo 2024, a grand exhibition where students and professionals from various campuses and industries come together.",
      imageUrl: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png"
    },
    {
      id: 'Gamedev',
      title: "Game Development",
      description: "Join us for our upcoming game development workshop in collaboration with TILTEDU...",
      imageUrl:  "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png"
    },
    {
      id: '3d_printing',
      title: "3D Printing",
      description: "Join us for an engaging 3D Printing Workshop where you will explore the fundamentals of 3D printing technology.",
      imageUrl: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png"
    },
    {
      id: 'pcb_designing',
      title: "PCB Designing",
      description: "Join us for an intensive PCB Designing Workshop where you'll learn to create schematics.",
      imageUrl: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png"
    }
  ];

  return (
    <section className="all-events">
      <h1 style={{display:'flex',justifyContent:'center',fontSize:'6rem'}}>Events</h1>
      <div className="main">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
      
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {eventsData.map(event => (
            <SwiperSlide key={event.id}>
              <div
                className="event-card"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              >
                <div className="event-card-content">
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <Link to={`/event/${event.id}`}><button className="button">Learn More</button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SmallEvents;
