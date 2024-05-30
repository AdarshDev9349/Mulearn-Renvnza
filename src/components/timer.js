import React, { useState, useEffect } from 'react';
 // You can create your own CSS file for styling

function CountdownTimer() {
  const countdownDate = new Date('07/03/2024'); // Set your desired end date and time

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateTimeLeft = () => {
    if (countdownDate) {
      const currentTime = new Date();
      const difference = countdownDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }
  };

  return (
    <div className="countdown-container">
      {timeLeft.seconds < 0 ? (
        <div className="expired-notice">Time's up!</div>
      ) : (
        <div className="countdown-timer">
          <div className="timer-part">
            <span className="timer-value">{timeLeft.days || '00'}</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-part">
            <span className="timer-value">{timeLeft.hours || '00'}</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-part">
            <span className="timer-value">{timeLeft.minutes || '00'}</span>
            <span className="timer-label">Minutes</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-part">
            <span className="timer-value">{timeLeft.seconds || '00'}</span>
            <span className="timer-label">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;