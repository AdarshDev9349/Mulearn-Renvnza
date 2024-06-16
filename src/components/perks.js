import React from "react";
import { motion } from "framer-motion";
import useInView from './useinview'; // Ensure to adjust the path according to your file structure

const SponsorshipPerks = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.1 }, 1000);
  const [goldRef, goldInView] = useInView({ threshold: 0.1 }, 1000);
  const [silverRef, silverInView] = useInView({ threshold: 0.1 }, 1000);

  const isMobile = window.innerWidth < 768;
  const duration = isMobile ? 0.5 : 0.8;
  const delay = isMobile ? 0.4 : 0.8;

  return (
    <div className="section-sponsorship">
      <div className="text">
        <h1>
          Discover Your <span className="span">Sponsorship Perks</span>
        </h1>
        <div className="perks-container">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
              duration: duration,
              delay: delay-0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk"
          >
            <h2>Title Sponsor (50k)</h2>
            <ul>
              <li>
                Name & Logo attached with title & title sponsor placed near the
                event name in largest size
              </li>
              <li>On all creatives (online & offline)</li>
              <li>
                Deliverables:
                <ul>
                  <li>Standees</li>
                  <li>Stalls</li>
                  <li>Community promotion</li>
                  <li>Rights to re-use event’s media assets</li>
        
                </ul>
              </li>
            </ul>
          </motion.div>
          <motion.div
            ref={goldRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={goldInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
              duration: duration,
              delay: delay- 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk"
          >
            <h2>Gold Package (30k)</h2>
            <ul>
              <li>
                Name & Logo attached with title & title sponsor placed near the
                event name in largest size
              </li>
              <li>On all creatives (online & offline)</li>
              <li>
                Deliverables:
                <ul>
                  <li>Standees</li>
                  <li>Community promotion</li>
                  <li>Rights to re-use event’s media assets</li>
                  
                </ul>
              </li>
            </ul>
          </motion.div>
          <motion.div
            ref={silverRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={silverInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
              duration: duration,
              delay: delay - 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk"
          >
            <h2>Silver Package (10k)</h2>
            <ul>
              <li>
                Name & Logo attached with title & title sponsor placed near the
                event name in largest size
              </li>
              <li>On all creatives (online & offline)</li>
            </ul>
          </motion.div>
        </div>
        <div className="btndiv">
          <button className="eventbtn" style={{ marginLeft: "10px" }}>
            <span className="btn__inner">
              <span className="btn__slide"></span>
              <span className="btn__content">Get in Touch with us</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPerks;
