import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "./img/astra.svg";

const Devexpo = () => {
  const [showModal, setShowModal] = useState(false);
  const registrationLink =
    "https://airtable.com/app0ast9KLzNwkPSe/shreDIwSBhg5sFXND";
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="dev">
      <div className="head-dev">
        <h1>DEV EXPO</h1>
        <p>
          Experience the tech expo like never before. Open to all students and
          professionals.
        </p>
        <p>Date : 3-4 July 2024</p>
        <p>Venue : University College of Engineering,Kariavattom</p>
        <button
          className="eventbtn second"
          style={{ top: "0", marginTop: "16px" }}
          onClick={handleOpenModal}
        >
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">Learn More</span>
          </span>
        </button>
      </div>
      <img src={image} alt="" />

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="modal-container">
              <span className="close-btn" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Dev Expo</h2>
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="card"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2>Mentors</h2>
                  <img src="" alt="" />
                  <p>
                    Share your expertise and guide the next generation of tech
                    enthusiasts. Sign up to be a mentor at our expo.
                  </p>
                  {/* <button
                  className="eventbtn second"
                  style={{ top: "0", marginTop: "16px" }}
                  onClick={handleOpenModal}
                >
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Register Now</span>
                  </span>
                </button> */}
                </motion.div>

                <motion.div
                  className="card"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2>Projects</h2>
                  <img src="" alt="" />
                  <p>
                    Showcase your innovative projects to a wide audience. Gain
                    feedback and recognition for your work.
                  </p>
                  {/* <button
                  className="eventbtn second"
                  style={{ top: "0", marginTop: "16px" }}
                  onClick={handleOpenModal}
                >
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Register Now</span>
                  </span>
                </button> */}
                </motion.div>
              </motion.div>
              <a href={registrationLink}>
                <button
                  className="eventbtn second"
                  style={{ top: "0", marginTop: "16px" }}
                  onClick={handleOpenModal}
                >
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Register Now</span>
                  </span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Devexpo;
