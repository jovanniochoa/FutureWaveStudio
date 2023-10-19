import React from 'react';
import './AppCards.css';

const AppCards = () => {
  return (
    <div className="app-cards">
      <div className="card">
        <img src="./ClimbingAppLogo.png" alt="Climbing App Logo" />
        <h2>Ascent Mastery</h2>
        <p>Get ready for a thrilling rock climbing adventure like no other. Ascent Mastery is not just an app; it's your passport to the ultimate climbing experience. Picture this: a fusion of rock climbing and gaming, where the thrill of ascending challenging routes goes hand-in-hand with competing against climbers from around the world.</p>
      </div>

      <div className="card">
        <img src="./ReactionTimeLogo.png" alt="Climbing App Logo" />
        <h2>ReactMaster</h2>
        <p>Ready to challenge your reflexes and see how quick you really are? Look no further! ReactMaster is the ultimate reaction speed app that will put your skills to the test and keep you coming back for more.</p>
      </div>

      {/* Add more cards as needed */}
    </div>
  );
};

export default AppCards;
