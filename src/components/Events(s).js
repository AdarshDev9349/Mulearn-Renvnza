import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SmallEvents = () => {
  return (
    <section className="all-events">
      <h1><span>//</span>Events</h1>
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
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/7'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/6'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/5'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/1'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/2'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/3'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="event-card"
              style={{ backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png)' }}
            >
              <div className="event-card-content">
                <h2>Upcoming Event</h2>
                <p>Join us for an exciting tech tournament featuring top players from around the world.</p>
                <Link to={'/event/4'}><button className="button">Learn More</button></Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SmallEvents;
