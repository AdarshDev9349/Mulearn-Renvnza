import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Count = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="Count" ref={ref}>
      <h1>Here’s why sponsoring us can make a significant difference</h1>
      <div className="stats-container">
        <div className="stat-item">
          <h2>
            {inView ? <CountUp end={5} duration={4} /> : '5'}+
          </h2>
          <p>Students joined startup companies</p>
        </div>
        <div className="stat-item">
          <h2>
            {inView ? <CountUp end={20} duration={2} /> : '20'}+
          </h2>
          <p>Students secured internships</p>
        </div>
        <div className="stat-item">
          <h2>
            {inView ? <CountUp end={8} duration={2} /> : '8'}th
          </h2>
          <p>Rank in Kerala</p>
        </div>
        <div className="stat-item">
          <h2>
            {inView ? <CountUp end={500} duration={2} /> : '500'}+
          </h2>
          <p>Students skilled up</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
