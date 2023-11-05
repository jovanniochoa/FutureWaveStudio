import React from 'react';
import './AppsIcons.css'; // Import your styling

const AppsIcons = () => {
  return (
    <div className="apps-icons-container">
      <div className="apps-row">
        <div className="app">
          <a href="/reaction" target="_blank" rel="noopener noreferrer">
            <img src="ReactionTimeLogo.png" alt="App 1" />
          </a>
          <div className="app-details">
            <h3>ReactMaster</h3>
            <p>Tap Against Family and Friends</p>
          </div>
        </div>
        <div className="app">
          <a href="rock_climbing" target="_blank" rel="noopener noreferrer">
            <img src="ClimbingAppLogo.png" alt="App 2" />
          </a>
          <div className="app-details">
            <h3>Ascent Mastery</h3>
            <p> Compete Against The Best Climbers</p>
          </div>
        </div>
      </div>

      <div className="apps-row">
        
      </div>
    </div>
  );
};

export default AppsIcons;
