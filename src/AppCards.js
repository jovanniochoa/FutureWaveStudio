// AppCards.js
import React, { useState } from 'react';
import './AppCards.css';

const AppCards = () => {
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);

  return (
    <div className="app-cards">
      <div className={`card ${isHovered1 ? 'hovered' : ''}`} onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}>
        <img
          src={isHovered1 ? './rockqr.png' : './ClimbingAppLogo.png'}
          alt="Climbing App Logo"
          className="card-img"
        />
        <div className="card-content">
          <h2>Ascent Mastery</h2>
          <p>Get ready for a thrilling rock climbing adventure like no other. Ascent Mastery is not just an app; it's your passport to the ultimate climbing experience. Picture this: a fusion of rock climbing and gaming, where the thrill of ascending challenging routes goes hand-in-hand with competing against climbers from around the world.</p>
        </div>
      </div>

      <div className={`card ${isHovered2 ? 'hovered' : ''}`} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
        <img
          src={isHovered2 ? './frame.png' : './ReactionTimeLogo.png'}
          alt="Climbing App Logo"
          className="card-img"
        />
        <div className="card-content">
          <h2>ReactMaster</h2>
          <p>Ready to challenge your reflexes and see how quick you really are? Look no further! ReactMaster is the ultimate reaction speed app that will put your skills to the test and keep you coming back for more.</p>
        </div>
      </div>

      {/* Add more cards as needed */}
    </div>
  );
};

export default AppCards;
