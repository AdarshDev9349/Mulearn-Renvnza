import React from "react";
import image1 from './img/weapon_1.svg'
import image2 from './img/weapon_2.svg'
import image3 from './img/weapon_3.svg'
import { motion } from "framer-motion";
import useInView from "./useinview"; // Ensure to adjust the path according to your file structure

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
          Discover Your Sponsorship Perks
        </h1>
        <div className="perks-container">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              titleInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: duration,
              delay: delay - 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk notched"
          >
            <div className="titleSection">
              <h2 className="title">Title Sponser</h2>
              <div className="investment">
                <span className="investmentIcon">🔰</span>
                <span>Investment : 50k</span>
              </div>
              <ul className="list">
                <li>
                  Name & Logo attached with title & title sponsor placed near
                  the event
                </li>
                <li>
                  Name in largest size On all creatives (online & offline)
                </li>
              </ul>
            </div>
            <div className="deliverablesSection">
              <h2 className="deliverablesTitle">Deliverables</h2>
              <ul className="deliverablesList" style={{listStyle:'none'}}>
                <li>&gt;&gt; Standees</li>
                <li>&gt;&gt; Stalls</li>
                <li>&gt;&gt; Community promotion</li>
                <li>&gt;&gt; Rights to re-use event's media assets</li>
              </ul>
              <img
                src={image1}
                alt="Gun"
                className="gunImage"
              />
            </div>
          </motion.div>
          <motion.div
            ref={goldRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              goldInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: duration,
              delay: delay - 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk notched"
          >
            <div className="titleSection">
              <h2 className="title">Gold Package</h2>
              <div className="investment">
                <span className="investmentIcon">🔰</span>
                <span>Investment : 30k</span>
              </div>
              <ul className="list">
                <li>
                  Name & Logo attached with title & title sponsor placed near
                  the event
                </li>
                <li>
                  Name in largest size On all creatives (online & offline)
                </li>
              </ul>
            </div>
            <div className="deliverablesSection">
              <h2 className="deliverablesTitle">Deliverables</h2>
              <ul className="deliverablesList"style={{listStyle:'none'}}>
                <li>&gt;&gt; Standees</li>
                <li>&gt;&gt; Community promotion</li>
                <li>&gt;&gt; Rights to re-use event's media assets</li>
              </ul>
              <img
                src={image2}
                alt="Gun"
                className="gunImage"
                style={{top:"18%",right:"-9%"}}
              />
            </div>
          </motion.div>
          <motion.div
            ref={silverRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              silverInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: duration,
              delay: delay - 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="perk notched"
          >
            <div className="titleSection">
              <h2 className="title">Silver Package</h2>
              <div className="investment">
                <span className="investmentIcon">🔰</span>
                <span>Investment : 10k</span>
              </div>
              <ul className="list">
                <li>
                  Name & Logo attached with title & title sponsor placed near
                  the event
                </li>
                <li>
                  Name in largest size On all creatives (online & offline)
                </li>
              </ul>
            </div>
    
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
