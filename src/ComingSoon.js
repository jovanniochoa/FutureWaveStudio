import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './PhoneAnimation.json';
import './ComingSoon.css'; // Import CSS file

const ComingSoon = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Calculate countdown time
    const launchDate = new Date('2023-12-31').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, []);

  return (
    <div className="coming-soon-container">
      <h2>Coming Soon</h2>
      <p>We're working on something amazing!</p>
      <div className="lottie-animation">
        <Lottie animationData={animationData} />
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <p className="countdown">Countdown: {countdown}</p>
    </div>
  );
};

export default ComingSoon;
