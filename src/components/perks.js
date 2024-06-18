import React from 'react';
import { motion } from 'framer-motion';
import name from './icons/name.png';
import stalls from './icons/stalls.png';
import vip from './icons/vip.png';
import high from './icons/high.png';
import bag from './icons/bag.png';
import promo from './icons/promotion.png';
import special from './icons/special.png';
import reuse from './icons/reuse.svg';
import video from './icons/video.png';
import banner from './icons/banner.png';

const sponsors = [
  {
    title: "Title Sponsor",
    investment: "60K",
    benefits: [
      { text: "Exclusive naming rights: Event named 'event name - Presented by [Sponsor Name]'", icon: name },
      { text: "Dedicated hotspots for stalls and promotions (3 days)", icon: stalls },
      { text: "VIP access and VIP ID for pro show (2 max)", icon: vip },
      { text: "Prominent logo placement with highest visibility in all marketing materials", icon: high },
      { text: "Logo on official merchandise", icon: bag },
      { text: "Special mention in all media releases", icon: special },
      { text: "Standee placement at strategic locations", icon: banner },
      { text: "Community promotion through event channels", icon: promo },
      { text: "Rights to reuse the event’s media assets for marketing", icon: reuse },
      { text: "Extra coverage in after-video of the event", icon: video }
    ]
  },
  {
    title: "Gold package",
    investment: "30K",
    benefits: [
      { text: "Exclusive naming rights: Event named 'event name - Powered by [Sponsor Name]'", icon: name },
      { text: "Prominent logo placement on all event creatives (online and offline)", icon: special },
      { text: "Logo on official merchandise", icon: bag },
      { text: "Standee placement at strategic locations", icon: banner },
      { text: "Stalls at the event (1 day)", icon: stalls },
      { text: "Community promotion through event channels", icon: promo },
      { text: "Extra coverage in after-video of the event", icon: video },
      { text: "Rights to reuse the event’s media assets for marketing", icon: reuse }
    ]
  },
  {
    title: "Silver package",
    investment: "10K",
    benefits: [
      { text: "Logo placement on selected event creatives (online and offline)", icon: special },
      { text: "Standee placement in secondary locations", icon: banner },
      { text: "Mention in community promotions", icon: promo },
      { text: "Rights to reuse the event’s media assets for marketing", icon: reuse }
    ]
  }
];

const SponsorshipPerks = () => {
  return (
    <div className="section-sponsorship">
      <div className="text">
        <h1>Discover Your Sponsorship Perks</h1>
        <div className="perks-container">
          {sponsors.map((sponsor, index) => (
            <div className="perk notched" key={index}>
              <div className="titleSection">
                <h2 className="title">{sponsor.title}</h2>
                <div className="investment">
                  <span>Investment: {sponsor.investment}</span>
                </div>
                <div className={`benefits-list ${sponsor.title}`}>
                  {sponsor.benefits.map((benefit, i) => (
                    <motion.div
                      className={`benefit-div ${sponsor.title}`}
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 1 + i * 0.2, // stagger animation
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                    >
                      <img src={benefit.icon} alt="" className="benefit-icon" />
                      <p>{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPerks;
